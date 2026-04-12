import { SYSTEM_PROMPT } from "./prompts.js";
import * as pdfjsLib from "./vendor/pdfjs/pdf.min.mjs";

const MAX_CHARS = 120_000;
const MIN_TEXT_CHARS = 80;
/** Reject single fetch bodies larger than this before PDF/HTML parsing (memory safety). */
const MAX_RESPONSE_BYTES = 50 * 1024 * 1024;
const SHORT_TEXT_HINT = "Very little text was extracted";

const TAB_LOAD_TIMEOUT_MS = 45_000;
const HYDRATION_DELAY_MS = 2_500;
const SECOND_SCRAPE_DELAY_MS = 5_000;
const THIRD_SCRAPE_DELAY_MS = 8_000;

const STORAGE_LAST_ANALYSIS = "lastPolicyAnalysis";
const STORAGE_HISTORY = "analysisHistory";
const MAX_HISTORY_ENTRIES = 50;
/** Skip a history row if serialized JSON would be unwieldy for chrome.storage.local. */
const MAX_HISTORY_ENTRY_CHARS = 1_500_000;
/** Extension message structured-clone size varies; stay under a conservative cap for uploads. */
const MAX_EXTENSION_MESSAGE_BYTES = 48 * 1024 * 1024;

const LOW_TEXT_IN_TAB =
  "Very little readable text was found after multiple waits (login wall, bot block, cross-origin iframe, closed shadow DOM, or a very slow SPA). Wait until the full policy is visible, try “Analyze this tab” again, or paste the text.";

const GEMINI_DEFAULT_BASE = "https://generativelanguage.googleapis.com/v1beta";
const OPENAI_DEFAULT_BASE = "https://api.openai.com/v1";

async function getSettings() {
  const d = await chrome.storage.sync.get([
    "llmProvider",
    "apiKey",
    "apiBaseUrl",
    "geminiBaseUrl",
    "model",
  ]);
  const provider = d.llmProvider === "openai" ? "openai" : "gemini";
  const model =
    d.model?.trim() ||
    (provider === "gemini" ? "gemini-flash-latest" : "gpt-4o-mini");
  return {
    provider,
    apiKey: d.apiKey || "",
    openaiBaseUrl: (d.apiBaseUrl || OPENAI_DEFAULT_BASE).replace(/\/$/, ""),
    geminiBaseUrl: (d.geminiBaseUrl || GEMINI_DEFAULT_BASE).replace(/\/$/, ""),
    model,
  };
}

function buildUserPayload(documentText, meta) {
  return [
    "Analyze the following document.",
    "",
    "Metadata (may be incomplete):",
    `- Source URL: ${meta.sourceUrl || ""}`,
    `- Title: ${meta.title || ""}`,
    `- Fetched URL: ${meta.finalUrl || ""}`,
    `- Link found on page (referrer): ${meta.linkFoundOnPage || ""}`,
    `- Content-Type: ${meta.contentType || ""}`,
    `- Extracted on: ${new Date().toISOString()}`,
    "",
    "Document text:",
    "<<<",
    documentText,
    ">>>",
    "",
    "Return only the JSON object described in your instructions.",
  ].join("\n");
}

function htmlToText(html) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const text = doc.body?.innerText || "";
    return text.replace(/\n{3,}/g, "\n\n").trim();
  } catch {
    return "";
  }
}

/** Prefer UTF-8; if replacement chars appear, retry common Western encodings (legacy policy pages). */
function decodeBytesAsText(buf) {
  const utf8 = new TextDecoder("utf-8", { fatal: false }).decode(buf);
  if (!/\uFFFD/.test(utf8)) return utf8;
  try {
    return new TextDecoder("windows-1252", { fatal: false }).decode(buf);
  } catch {
    return utf8;
  }
}

let pdfWorkerConfigured = false;
function configurePdfWorker() {
  if (pdfWorkerConfigured) return;
  pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL("vendor/pdfjs/pdf.worker.min.mjs");
  pdfWorkerConfigured = true;
}

function clipDocumentText(text) {
  return text.length > MAX_CHARS ? text.slice(0, MAX_CHARS) + "\n\n[TRUNCATED]" : text;
}

async function extractPdfTextFromArrayBuffer(buffer) {
  configurePdfWorker();
  const data = new Uint8Array(buffer);
  const loadingTask = pdfjsLib.getDocument({
    data,
    isEvalSupported: false,
    useSystemFonts: true,
  });
  const pdf = await loadingTask.promise;
  const parts = [];
  for (let p = 1; p <= pdf.numPages; p++) {
    const page = await pdf.getPage(p);
    const textContent = await page.getTextContent();
    for (const item of textContent.items) {
      if (!item || typeof item !== "object") continue;
      if ("str" in item && item.str) parts.push(item.str);
    }
    parts.push("\n\n");
  }
  return parts.join(" ").replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

/**
 * @param {Response} res
 * @param {ArrayBuffer} buf
 * @param {string} shortTextHint Error when extracted text is below MIN_TEXT_CHARS
 */
async function extractPolicyTextFromPdfBuffer(res, buf, shortTextHint) {
  try {
    const text = await extractPdfTextFromArrayBuffer(buf);
    const clipped = clipDocumentText(text);
    const ct = (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
    if (clipped.length < MIN_TEXT_CHARS) {
      return {
        ok: false,
        error: shortTextHint,
        contentType: ct || "application/pdf",
        finalUrl: res.url,
      };
    }
    return {
      ok: true,
      text: clipped,
      contentType: ct || "application/pdf",
      finalUrl: res.url,
    };
  } catch (e) {
    return {
      ok: false,
      error: `Could not read PDF: ${e?.message || String(e)}`,
      contentType: (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase() || "application/pdf",
      finalUrl: res.url,
    };
  }
}

/**
 * Real document URL for fetching. Chrome’s built-in PDF UI often uses chrome-extension://…
 * with the https URL in a query param; service-worker fetch must use that https URL.
 */
function resolveFetchableDocumentUrl(tab) {
  const u = tab.url || "";
  if (/^https?:\/\//i.test(u)) return u;
  try {
    const parsed = new URL(u);
    if (parsed.protocol === "chrome-extension:") {
      for (const key of ["url", "src", "file"]) {
        const raw = parsed.searchParams.get(key);
        if (!raw) continue;
        try {
          const decoded = decodeURIComponent(raw.replace(/\+/g, " "));
          if (/^https?:\/\//i.test(decoded)) return decoded;
        } catch {
          if (/^https?:\/\//i.test(raw)) return raw;
        }
      }
    }
  } catch {
    /* ignore */
  }
  return "";
}

function pathnameFromResponseUrl(urlStr) {
  try {
    return new URL(urlStr).pathname;
  } catch {
    return "";
  }
}

function responseLooksLikePdf(res, buf) {
  const head = new Uint8Array(buf.slice(0, Math.min(8, buf.byteLength)));
  const magic = String.fromCharCode(...head);
  const magicPdf = magic.startsWith("%PDF");
  const ct = (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
  const path = pathnameFromResponseUrl(res.url);
  return (
    magicPdf ||
    ct.includes("application/pdf") ||
    ct === "application/x-pdf" ||
    /\.pdf(\?|#|$)/i.test(path) ||
    (ct === "application/octet-stream" && magicPdf)
  );
}

/** Explains why bytes are not treated as PDF (many sites serve an HTML shell or viewer; fetch does not run client-side embeds). */
function describeNonPdfResponse(res, buf) {
  const ct = (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
  const peek = new TextDecoder("utf-8", { fatal: false }).decode(buf.slice(0, 256));
  const p = peek.replace(/\s+/g, " ").trim();
  let hint = "";
  if (/^<!doctype|^<\s*html/i.test(peek.trim()) || p.toLowerCase().includes("<html")) {
    hint =
      " The server returned a web page (HTML), not raw PDF bytes—common for SPAs or embedded viewers. Use “Paste policy text” or open the direct .pdf link if the site provides one.";
  } else if (buf.byteLength < 16) {
    hint = " The response body was almost empty.";
  }
  return `Could not read this URL as a PDF (Content-Type: ${ct || "unknown"}).${hint}`;
}

async function httpErrorDetail(res) {
  let detail = "";
  try {
    const errBuf = await res.arrayBuffer();
    if (errBuf.byteLength > MAX_RESPONSE_BYTES) return "";
    const snippet = new TextDecoder("utf-8", { fatal: false }).decode(errBuf.slice(0, 500));
    detail = snippet.slice(0, 160).replace(/\s+/g, " ").trim();
  } catch {
    /* ignore */
  }
  return detail;
}

/** Some hosts return HTML to bare fetches; browser-like headers improve PDF delivery. */
function pdfFetchHeaders(url) {
  const headers = {
    Accept: "application/pdf,application/octet-stream,*/*;q=0.1",
    Referer: url,
  };
  if (typeof navigator !== "undefined" && navigator.userAgent) {
    headers["User-Agent"] = navigator.userAgent;
  }
  return headers;
}

function htmlFetchHeaders(url) {
  const headers = {
    Accept: "text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8",
    Referer: url,
  };
  if (typeof navigator !== "undefined" && navigator.userAgent) {
    headers["User-Agent"] = navigator.userAgent;
  }
  return headers;
}

/** Fetch URL and extract text if the response is a PDF (by Content-Type or %PDF magic). */
async function fetchAndExtractPdfText(url, opts = {}) {
  const credentials = opts.useCredentials ? "include" : "omit";
  try {
    const res = await fetch(url, {
      method: "GET",
      credentials,
      redirect: "follow",
      headers: pdfFetchHeaders(url),
    });
    if (!res.ok) {
      const detail = await httpErrorDetail(res);
      return {
        ok: false,
        error: `HTTP ${res.status}${detail ? `: ${detail}…` : ""}`,
      };
    }
    const buf = await res.arrayBuffer();
    if (buf.byteLength > MAX_RESPONSE_BYTES) {
      return {
        ok: false,
        error: `Download too large (${(buf.byteLength / (1024 * 1024)).toFixed(1)} MB). Try pasting text or a smaller file.`,
      };
    }
    if (!responseLooksLikePdf(res, buf)) {
      return { ok: false, error: describeNonPdfResponse(res, buf) };
    }

    const pdf = await extractPolicyTextFromPdfBuffer(
      res,
      buf,
      "This PDF has almost no selectable text (it may be a scan or image). Use “Paste text” or OCR outside the extension."
    );
    if (!pdf.ok) {
      return {
        ok: false,
        error: pdf.error,
        finalUrl: pdf.finalUrl,
        contentType: pdf.contentType,
      };
    }
    return {
      ok: true,
      text: pdf.text,
      contentType: pdf.contentType,
      finalUrl: pdf.finalUrl,
    };
  } catch (e) {
    return {
      ok: false,
      error: e?.message || String(e),
    };
  }
}

async function fetchDocumentText(url) {
  const res = await fetch(url, {
    method: "GET",
    credentials: "omit",
    redirect: "follow",
    headers: htmlFetchHeaders(url),
  });

  const ct = (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
  if (!res.ok) {
    const detail = await httpErrorDetail(res);
    return {
      ok: false,
      error: `HTTP ${res.status}${detail ? `: ${detail}…` : ""}`,
      contentType: ct,
      finalUrl: res.url,
    };
  }

  const buf = await res.arrayBuffer();
  if (buf.byteLength > MAX_RESPONSE_BYTES) {
    return {
      ok: false,
      error: `Download too large (${(buf.byteLength / (1024 * 1024)).toFixed(1)} MB). Try pasting excerpts or a smaller document.`,
      contentType: ct,
      finalUrl: res.url,
    };
  }
  const isPdf = responseLooksLikePdf(res, buf);

  if (isPdf) {
    const pdf = await extractPolicyTextFromPdfBuffer(
      res,
      buf,
      "PDF contained very little extractable text (image-only or protected). Try “Paste text”."
    );
    if (!pdf.ok) {
      return {
        ok: false,
        error: pdf.error,
        contentType: pdf.contentType,
        finalUrl: pdf.finalUrl,
      };
    }
    return {
      ok: true,
      text: pdf.text,
      contentType: pdf.contentType,
      finalUrl: pdf.finalUrl,
    };
  }

  if (!ct.includes("html") && !ct.includes("text/plain")) {
    const snippet = decodeBytesAsText(buf.slice(0, 500));
    return {
      ok: false,
      error: `Unsupported content type: ${ct || "unknown"}. Snippet: ${snippet.slice(0, 200)}…`,
      contentType: ct,
    };
  }

  const raw = decodeBytesAsText(buf);
  const text = ct.includes("html") ? htmlToText(raw) : raw.trim();
  if (!text || text.length < MIN_TEXT_CHARS) {
    return {
      ok: false,
      error: `${SHORT_TEXT_HINT}. The page may need JavaScript to render, require a login, or use a format we cannot read from a simple fetch.`,
      contentType: ct,
      finalUrl: res.url,
      shortText: true,
    };
  }

  return {
    ok: true,
    text: text.length > MAX_CHARS ? text.slice(0, MAX_CHARS) + "\n\n[TRUNCATED]" : text,
    contentType: ct,
    finalUrl: res.url,
  };
}

function bufferLooksLikePdfBytes(buf) {
  if (!buf || buf.byteLength < 5) return false;
  const head = new Uint8Array(buf.slice(0, Math.min(8, buf.byteLength)));
  return String.fromCharCode(...head).startsWith("%PDF");
}

/**
 * @param {ArrayBuffer} arrayBuffer
 */
async function extractTextFromUpload(arrayBuffer, fileName, mimeType) {
  const lower = (fileName || "").toLowerCase();
  const mime = (mimeType || "").toLowerCase();

  if (arrayBuffer.byteLength > MAX_RESPONSE_BYTES) {
    return {
      ok: false,
      error: `File too large (max ${Math.floor(MAX_RESPONSE_BYTES / (1024 * 1024))} MB).`,
    };
  }

  const isPdfMime = mime.includes("pdf");
  const isPdfExt = lower.endsWith(".pdf");
  if (isPdfMime || isPdfExt || bufferLooksLikePdfBytes(arrayBuffer)) {
    if (!bufferLooksLikePdfBytes(arrayBuffer)) {
      return { ok: false, error: "File does not look like a valid PDF (missing %PDF header)." };
    }
    try {
      const text = await extractPdfTextFromArrayBuffer(arrayBuffer);
      const clipped = clipDocumentText(text);
      if (clipped.length < MIN_TEXT_CHARS) {
        return {
          ok: false,
          error:
            "This PDF has almost no selectable text (it may be a scan or image). Try .txt or paste.",
        };
      }
      return { ok: true, text: clipped, contentType: "application/pdf" };
    } catch (e) {
      return { ok: false, error: e?.message || String(e) };
    }
  }

  if (mime.includes("html") || lower.endsWith(".html") || lower.endsWith(".htm")) {
    const raw = decodeBytesAsText(arrayBuffer);
    const text = htmlToText(raw);
    if (!text || text.length < MIN_TEXT_CHARS) {
      return {
        ok: false,
        error: `Not enough text in file (minimum ${MIN_TEXT_CHARS} characters).`,
      };
    }
    return {
      ok: true,
      text: text.length > MAX_CHARS ? text.slice(0, MAX_CHARS) + "\n\n[TRUNCATED]" : text,
      contentType: "text/html",
    };
  }

  if (mime.includes("text/plain") || mime === "" || lower.endsWith(".txt") || lower.endsWith(".md")) {
    const raw = decodeBytesAsText(arrayBuffer);
    const text = raw.trim();
    if (text.length < MIN_TEXT_CHARS) {
      return {
        ok: false,
        error: `Text too short (minimum ${MIN_TEXT_CHARS} characters).`,
      };
    }
    return {
      ok: true,
      text: text.length > MAX_CHARS ? text.slice(0, MAX_CHARS) + "\n\n[TRUNCATED]" : text,
      contentType: "text/plain",
    };
  }

  return {
    ok: false,
    error: "Unsupported file type. Use PDF, HTML (.html), or plain text (.txt).",
  };
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForTabComplete(tabId, timeoutMs) {
  const initial = await chrome.tabs.get(tabId);
  if (initial.status === "complete") return;

  await new Promise((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      chrome.tabs.onUpdated.removeListener(onUpdated);
      reject(new Error("Timed out waiting for the policy page to load."));
    }, timeoutMs);

    function onUpdated(id, change) {
      if (id !== tabId || change.status !== "complete") return;
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      chrome.tabs.onUpdated.removeListener(onUpdated);
      resolve();
    }
    chrome.tabs.onUpdated.addListener(onUpdated);
  });
}

/**
 * Collect visible text from the live DOM: main document, open shadow roots, and same-origin iframes.
 * Cross-origin iframes are skipped (browser security).
 */
async function scrapeTabDeepText(tabId) {
  let injected;
  try {
    injected = await chrome.scripting.executeScript({
    target: { tabId },
    func: () => {
      const parts = [];
      const seen = new Set();
      function add(t) {
        const s = String(t || "")
          .replace(/\r/g, "")
          .replace(/\n{3,}/g, "\n\n")
          .trim();
        if (s.length < 20) return;
        const key = s.length > 200 ? s.slice(0, 200) : s;
        if (seen.has(key)) return;
        seen.add(key);
        parts.push(s);
      }
      function visitShadow(sr) {
        if (!sr) return;
        add(sr.innerText);
        add(sr.textContent);
        for (const el of sr.querySelectorAll("*")) {
          if (el.shadowRoot) visitShadow(el.shadowRoot);
        }
        for (const fr of sr.querySelectorAll("iframe")) {
          try {
            const d = fr.contentDocument;
            if (d) visitDocument(d, 0);
          } catch (_) {}
        }
      }
      function addSemanticRoots(doc) {
        if (!doc.querySelectorAll) return;
        const sel =
          'main, [role="main"], article, [role="article"], #main, #content, .legal, .terms, .policy, .privacy-policy, .tos';
        for (const el of doc.querySelectorAll(sel)) {
          add(el.innerText);
          add(el.textContent);
        }
      }
      function visitDocument(doc, depth) {
        if (!doc || !doc.documentElement || depth > 12) return;
        if (doc.body) {
          add(doc.body.innerText);
          add(doc.body.textContent);
        }
        addSemanticRoots(doc);
        function walk(el) {
          if (!el) return;
          if (el.shadowRoot) visitShadow(el.shadowRoot);
          const tag = el.tagName;
          if (tag === "IFRAME" || tag === "FRAME" || tag === "OBJECT") {
            try {
              const id =
                el.contentDocument ||
                (el.contentWindow && el.contentWindow.document);
              if (id) visitDocument(id, depth + 1);
            } catch (_) {}
          }
          for (const c of el.children) walk(c);
        }
        walk(doc.documentElement);
        try {
          const w = doc.defaultView;
          if (w && w.length) {
            for (let i = 0; i < w.length; i++) {
              try {
                const f = w[i];
                if (f && f.document) visitDocument(f.document, depth + 1);
              } catch (_) {}
            }
          }
        } catch (_) {}
      }
      visitDocument(document, 0);
      return parts.join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
    },
  });
  } catch (e) {
    console.warn("PolicyLens: scrapeTabDeepText failed", e?.message || e);
    return "";
  }
  const result = injected?.[0]?.result;
  return typeof result === "string" ? result : "";
}

/**
 * Wait until the tab is loaded, then scrape with hydration delays and a second pass if text is short.
 * @param {number} tabId
 * @param {{ skipWaitComplete?: boolean }} [opts]
 */
async function extractFromOpenTab(tabId, opts = {}) {
  const skipWaitComplete = Boolean(opts.skipWaitComplete);
  const tabMeta = await chrome.tabs.get(tabId);
  const fetchUrl = resolveFetchableDocumentUrl(tabMeta);
  const canTryPdfFetch = Boolean(fetchUrl);

  /**
   * Always try HTTP fetch + PDF parse first when we have a real URL. HEAD is often wrong/missing;
   * Chrome’s PDF viewer has no usable DOM text; the file is still at the underlying https URL.
   */
  let pdfErr = "";
  if (canTryPdfFetch) {
    const pdfFirst = await fetchAndExtractPdfText(fetchUrl, { useCredentials: true });
    if (pdfFirst.ok) return pdfFirst;
    if (pdfFirst.error) pdfErr = pdfFirst.error;
  }

  if (!skipWaitComplete) {
    await waitForTabComplete(tabId, TAB_LOAD_TIMEOUT_MS);
  }
  await sleep(HYDRATION_DELAY_MS);
  let text = await scrapeTabDeepText(tabId);
  if (text.length < MIN_TEXT_CHARS) {
    await sleep(SECOND_SCRAPE_DELAY_MS);
    text = await scrapeTabDeepText(tabId);
  }
  if (text.length < MIN_TEXT_CHARS) {
    await sleep(THIRD_SCRAPE_DELAY_MS);
    text = await scrapeTabDeepText(tabId);
  }
  const { url: finalUrl } = await chrome.tabs.get(tabId);
  if (text.length < MIN_TEXT_CHARS && canTryPdfFetch) {
    const pdfFallback = await fetchAndExtractPdfText(fetchUrl, { useCredentials: true });
    if (pdfFallback.ok) return pdfFallback;
    if (pdfFallback.error) pdfErr = pdfFallback.error;
  }
  if (text.length < MIN_TEXT_CHARS) {
    const hint = pdfErr
      ? `${LOW_TEXT_IN_TAB} PDF fetch/parse note: ${pdfErr}`
      : canTryPdfFetch
        ? LOW_TEXT_IN_TAB
        : `${LOW_TEXT_IN_TAB} (Could not resolve an https URL for this tab—open the policy in a normal tab or paste text.)`;
    return {
      ok: false,
      error: hint,
      finalUrl,
    };
  }
  return {
    ok: true,
    text: text.length > MAX_CHARS ? text.slice(0, MAX_CHARS) + "\n\n[TRUNCATED]" : text,
    finalUrl,
    contentType: "text/html+deep",
  };
}

function domainLabelForHistory(meta) {
  if (!meta) return "(unknown)";
  if (meta.source === "upload" && meta.fileName) {
    const n = meta.fileName;
    return n.length > 52 ? `${n.slice(0, 49)}…` : n;
  }
  const primary = meta.finalUrl || meta.sourceUrl || "";
  if (primary && primary !== "(pasted)" && primary !== "(upload)") {
    try {
      const h = new URL(primary).hostname.replace(/^www\./, "");
      if (h) return h;
    } catch {
      /* ignore */
    }
  }
  if (meta.sourceUrl && /^https?:\/\//i.test(meta.sourceUrl)) {
    try {
      return new URL(meta.sourceUrl).hostname.replace(/^www\./, "");
    } catch {
      /* ignore */
    }
  }
  if (meta.source === "paste") return "(pasted)";
  if (meta.source === "upload") return "(file)";
  return "(unknown)";
}

async function appendHistoryEntry(result, meta) {
  try {
    const domain = domainLabelForHistory(meta);
    const preview = (result.document_summary || result.overall_risk_rationale || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 160);
    const entry = {
      id: `h${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      savedAt: Date.now(),
      domain,
      preview: preview || "—",
      risk: (result.overall_risk_level || "low").toLowerCase(),
      result,
      meta: {
        source: meta?.source,
        sourceUrl: meta?.sourceUrl,
        finalUrl: meta?.finalUrl,
        contentType: meta?.contentType,
        fileName: meta?.fileName,
        pasted: meta?.pasted,
        linkFoundOnPage: meta?.linkFoundOnPage,
      },
    };
    try {
      if (JSON.stringify(entry).length > MAX_HISTORY_ENTRY_CHARS) {
        console.warn("PolicyLens: history entry skipped (result too large for storage)");
        return;
      }
    } catch (e) {
      console.warn("PolicyLens: could not serialize history entry", e);
      return;
    }
    const prev = await chrome.storage.local.get(STORAGE_HISTORY);
    const list = Array.isArray(prev[STORAGE_HISTORY]) ? prev[STORAGE_HISTORY] : [];
    list.unshift(entry);
    await chrome.storage.local.set({ [STORAGE_HISTORY]: list.slice(0, MAX_HISTORY_ENTRIES) });
  } catch (_) {
    /* ignore */
  }
}

async function saveLastPolicyAnalysis(result, meta) {
  try {
    const m = meta || {};
    await chrome.storage.local.set({
      [STORAGE_LAST_ANALYSIS]: {
        savedAt: Date.now(),
        result,
        meta: m,
      },
    });
    await appendHistoryEntry(result, m);
  } catch (_) {
    /* ignore */
  }
}

const CONTEXT_MENU_ANALYZE_LINK = "analyzePolicyLink";

/**
 * @param {string} url
 * @param {string} pageTitle
 * @param {"link" | "contextMenu"} sourceTag
 */
async function runFetchAndAnalyze(url, pageTitle, sourceTag = "link", linkFoundOnPage = "") {
  const fetched = await getDocumentTextWithFallback(url);
  if (!fetched.ok) {
    return { ok: false, error: fetched.error, stage: "fetch" };
  }
  const result = await analyzeWithLlm(fetched.text, {
    sourceUrl: url,
    finalUrl: fetched.finalUrl,
    contentType: fetched.contentType,
    title: pageTitle || "",
    linkFoundOnPage: typeof linkFoundOnPage === "string" ? linkFoundOnPage : "",
  });
  const meta = {
    sourceUrl: url,
    finalUrl: fetched.finalUrl,
    contentType: fetched.contentType,
    source: sourceTag,
    linkFoundOnPage: typeof linkFoundOnPage === "string" && linkFoundOnPage ? linkFoundOnPage : undefined,
  };
  await saveLastPolicyAnalysis(result, meta);
  return { ok: true, result, meta };
}

function ensureContextMenus() {
  chrome.contextMenus.remove(CONTEXT_MENU_ANALYZE_LINK, () => {
    void chrome.runtime.lastError;
    try {
      chrome.contextMenus.create({
        id: CONTEXT_MENU_ANALYZE_LINK,
        title: "Analyze link with PolicyLens",
        contexts: ["link"],
        targetUrlPatterns: ["http://*/*", "https://*/*"],
      });
    } catch (e) {
      console.warn("PolicyLens: context menu create failed", e);
    }
  });
}

chrome.runtime.onInstalled.addListener(() => {
  ensureContextMenus();
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId !== CONTEXT_MENU_ANALYZE_LINK) return;
  const linkUrl = info.linkUrl;
  if (!linkUrl || !/^https?:\/\//i.test(linkUrl)) return;
  if (linkUrl.startsWith("javascript:") || linkUrl.startsWith("data:")) return;

  const pageTitle = tab?.title || "";
  try {
    const out = await runFetchAndAnalyze(linkUrl, pageTitle, "contextMenu");
    if (!out.ok) {
      await chrome.storage.local.set({
        pendingPasteUiError: out.error || "Unknown error",
      });
    } else {
      await chrome.storage.local.remove("pendingPasteUiError");
    }
  } catch (e) {
    await chrome.storage.local.set({
      pendingPasteUiError: e?.message || String(e),
    });
  }
  await chrome.tabs.create({ url: chrome.runtime.getURL("paste.html") });
});

/**
 * JS-heavy sites return an empty shell to fetch(); open an inactive tab and read rendered text.
 */
async function extractRenderedTextViaTab(url) {
  let tabId;
  try {
    const tab = await chrome.tabs.create({ url, active: false });
    tabId = tab.id;
    if (tabId == null) {
      return { ok: false, error: "Could not open a background tab to render this page." };
    }

    await waitForTabComplete(tabId, TAB_LOAD_TIMEOUT_MS);
    const got = await extractFromOpenTab(tabId, { skipWaitComplete: true });

    const { url: afterUrl } = await chrome.tabs.get(tabId);

    if (!got.ok) {
      // Leave the background tab open so the user can see/login/reload; only close on success.
      tabId = undefined;
      return {
        ok: false,
        error: `${got.error}\n\nTip: The background tab was left open—finish loading or sign in there if needed, then use “Analyze this tab” on that page—or paste the policy text.`,
        contentType: "text/html+rendered",
        finalUrl: got.finalUrl || afterUrl || url,
      };
    }

    await chrome.tabs.remove(tabId).catch(() => {});
    tabId = undefined;

    return {
      ok: true,
      text: got.text,
      contentType: got.contentType,
      finalUrl: got.finalUrl || afterUrl || url,
    };
  } catch (e) {
    // Leave background tab open on failure so the user can inspect or retry in that tab.
    return {
      ok: false,
      error: e?.message || String(e),
    };
  }
}

function shouldTryRenderedFallback(first) {
  if (first.ok) return false;
  if (first.shortText !== true) return false;
  if (first.error?.includes("PDF")) return false;
  return true;
}

async function getDocumentTextWithFallback(url) {
  const first = await fetchDocumentText(url);
  if (first.ok) return first;
  if (!shouldTryRenderedFallback(first)) return first;

  const second = await extractRenderedTextViaTab(url);
  if (second.ok) return second;

  return {
    ok: false,
    error: second.error || first.error,
    contentType: second.contentType || first.contentType,
    finalUrl: second.finalUrl || first.finalUrl,
    shortText: first.shortText === true,
  };
}

function parseJsonFromModelContent(content) {
  if (!content || typeof content !== "string") {
    throw new Error("Model returned no text content.");
  }
  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error("Model did not return valid JSON.");
  }
  return parsed;
}

async function analyzeWithOpenAI(settings, userPayload) {
  const { apiKey, openaiBaseUrl, model } = settings;
  const url = `${openaiBaseUrl}/chat/completions`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPayload },
      ],
    }),
  });

  const raw = await res.text();
  if (!res.ok) {
    let detail = raw;
    try {
      detail = JSON.parse(raw).error?.message || raw;
    } catch {
      /* keep raw */
    }
    throw new Error(`OpenAI API error (${res.status}): ${detail}`);
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    throw new Error("Invalid JSON from API.");
  }

  const content = data.choices?.[0]?.message?.content;
  return parseJsonFromModelContent(content);
}

async function analyzeWithGemini(settings, userPayload) {
  const { apiKey, geminiBaseUrl, model } = settings;
  const endpoint = `${geminiBaseUrl}/models/${encodeURIComponent(model)}:generateContent`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents: [
        {
          role: "user",
          parts: [{ text: userPayload }],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json",
      },
    }),
  });

  const raw = await res.text();
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    throw new Error(`Gemini API returned non-JSON (${res.status}): ${raw.slice(0, 300)}`);
  }

  if (!res.ok) {
    const msg = data.error?.message || data.error?.status || raw;
    throw new Error(`Gemini API error (${res.status}): ${msg}`);
  }

  const block = data.promptFeedback?.blockReason;
  if (block) {
    throw new Error(`Gemini blocked the prompt: ${block}`);
  }

  if (!data.candidates?.length) {
    const extra = data.promptFeedback ? JSON.stringify(data.promptFeedback) : "No details.";
    throw new Error(`Gemini returned no candidates. ${extra}`);
  }

  const candidate = data.candidates[0];
  const finish = candidate?.finishReason;
  if (finish && finish !== "STOP" && finish !== "MAX_TOKENS") {
    throw new Error(`Gemini finish reason: ${finish}`);
  }

  const parts = candidate?.content?.parts;
  const text = Array.isArray(parts)
    ? parts.map((p) => p.text || "").join("")
    : "";

  return parseJsonFromModelContent(text);
}

async function analyzeWithLlm(documentText, meta) {
  const settings = await getSettings();
  if (!settings.apiKey) {
    throw new Error("Add your API key in extension options.");
  }

  const userPayload = buildUserPayload(documentText, meta);

  if (settings.provider === "openai") {
    return analyzeWithOpenAI(settings, userPayload);
  }
  return analyzeWithGemini(settings, userPayload);
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  (async () => {
    if (message?.type === "FETCH_AND_ANALYZE") {
      const { url, pageTitle, pageUrl } = message;
      const linkFoundOnPage = typeof pageUrl === "string" ? pageUrl : "";
      const out = await runFetchAndAnalyze(url, pageTitle, "link", linkFoundOnPage);
      if (!out.ok) {
        sendResponse({ ok: false, error: out.error, stage: out.stage || "fetch" });
        return;
      }
      sendResponse({ ok: true, result: out.result, meta: out.meta });
      return;
    }

    if (message?.type === "ANALYZE_TAB") {
      const tabId = message.tabId;
      if (tabId == null) {
        sendResponse({ ok: false, error: "No tab selected.", stage: "input" });
        return;
      }
      let tab;
      try {
        tab = await chrome.tabs.get(tabId);
      } catch {
        sendResponse({ ok: false, error: "Could not read that tab.", stage: "fetch" });
        return;
      }
      const u = tab.url || "";
      if (
        u.startsWith("chrome://") ||
        u.startsWith("edge://") ||
        u.startsWith("devtools://") ||
        u.startsWith("about:") ||
        u.startsWith("chrome-extension://")
      ) {
        sendResponse({
          ok: false,
          error:
            "This tab cannot be scraped (browser or extension page). Open the policy on a normal https:// page, then try again.",
          stage: "fetch",
        });
        return;
      }
      const got = await extractFromOpenTab(tabId, { skipWaitComplete: false });
      if (!got.ok) {
        sendResponse({ ok: false, error: got.error, stage: "fetch" });
        return;
      }
      const result = await analyzeWithLlm(got.text, {
        sourceUrl: got.finalUrl,
        finalUrl: got.finalUrl,
        contentType: got.contentType,
        title: tab.title || "",
      });
      const meta = {
        sourceUrl: got.finalUrl,
        finalUrl: got.finalUrl,
        contentType: got.contentType,
        source: "activeTab",
      };
      await saveLastPolicyAnalysis(result, meta);
      sendResponse({ ok: true, result, meta });
      return;
    }

    if (message?.type === "ANALYZE_UPLOADED_FILE") {
      const { arrayBuffer, fileName, mimeType } = message;
      if (!arrayBuffer || !(arrayBuffer instanceof ArrayBuffer)) {
        sendResponse({ ok: false, error: "No file data.", stage: "input" });
        return;
      }
      if (arrayBuffer.byteLength > MAX_EXTENSION_MESSAGE_BYTES) {
        sendResponse({
          ok: false,
          error:
            "File is too large to send to the extension background (message size limit). Try a smaller file or paste excerpts.",
          stage: "input",
        });
        return;
      }
      const name = typeof fileName === "string" ? fileName : "upload.bin";
      const extracted = await extractTextFromUpload(arrayBuffer, name, mimeType || "");
      if (!extracted.ok) {
        sendResponse({ ok: false, error: extracted.error, stage: "fetch" });
        return;
      }
      const result = await analyzeWithLlm(extracted.text, {
        sourceUrl: `(upload) ${name}`,
        finalUrl: "(upload)",
        contentType: extracted.contentType,
        title: name,
      });
      const meta = {
        source: "upload",
        fileName: name,
        finalUrl: "(upload)",
        sourceUrl: "",
        contentType: extracted.contentType,
      };
      await saveLastPolicyAnalysis(result, meta);
      sendResponse({ ok: true, result, meta });
      return;
    }

    if (message?.type === "ANALYZE_PASTED_TEXT") {
      const { text, sourceUrl, pageTitle } = message;
      if (!text || typeof text !== "string" || text.trim().length < MIN_TEXT_CHARS) {
        sendResponse({
          ok: false,
          error: `Pasted text is too short (minimum ${MIN_TEXT_CHARS} characters, after trimming).`,
          stage: "input",
        });
        return;
      }
      const body = text.length > MAX_CHARS ? text.slice(0, MAX_CHARS) + "\n\n[TRUNCATED]" : text;
      const result = await analyzeWithLlm(body, {
        sourceUrl: sourceUrl || "(pasted)",
        finalUrl: "(pasted)",
        contentType: "text/plain",
        title: pageTitle || "",
      });
      const meta = {
        pasted: true,
        source: "paste",
        sourceUrl: sourceUrl || "",
        finalUrl: "(pasted)",
      };
      await saveLastPolicyAnalysis(result, meta);
      sendResponse({ ok: true, result, meta });
      return;
    }

    sendResponse({ ok: false, error: "Unknown message type." });
  })().catch((err) => {
    sendResponse({ ok: false, error: err?.message || String(err), stage: "analyze" });
  });

  return true;
});
