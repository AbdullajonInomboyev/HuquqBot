const $ = (id) => document.getElementById(id);

let uiLocale = "en";

function tr(key) {
  return I18n.t(uiLocale, key);
}

function escapeHtml(s) {
  return PolicyResults.escapeHtml(String(s ?? ""));
}

const { showStatus, hideStatus, showError } = StatusUi.createStatusHelpers({ variant: "paste" });

function renderResults(data, hintText) {
  PolicyResults.renderPolicyResults($, tr, data, hintText);
  $("resultSection").classList.remove("hidden");
}

async function analyzePasted() {
  hideStatus();
  $("resultSection").classList.add("hidden");
  const text = $("pasteArea").value || "";
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  $("btnAnalyzePaste").disabled = true;
  showStatus(tr("statusCallingLlm"), { loading: true });

  try {
    const resp = await chrome.runtime.sendMessage({
      type: "ANALYZE_PASTED_TEXT",
      text,
      sourceUrl: tab?.url || "",
      pageTitle: tab?.title || "",
    });

    if (resp === undefined) {
      showError(tr("errNoResponseConsole"));
      return;
    }

    if (!resp.ok) {
      showError(resp.error || tr("errUnknown"));
      return;
    }

    hideStatus();
    renderResults(resp.result, "");
    await renderHistoryList();
  } catch (e) {
    showError(e?.message || String(e));
  } finally {
    $("btnAnalyzePaste").disabled = false;
  }
}

async function renderHistoryList() {
  const { analysisHistory } = await chrome.storage.local.get("analysisHistory");
  const list = $("historyList");
  const empty = $("historyEmpty");
  if (!list || !empty) return;

  list.innerHTML = "";
  if (!Array.isArray(analysisHistory) || analysisHistory.length === 0) {
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  for (const entry of analysisHistory) {
    if (!entry?.result) continue;
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "history-item";
    const t = entry.savedAt ? new Date(entry.savedAt).toLocaleString() : "";
    const risk = (entry.risk || "low").toUpperCase();
    btn.innerHTML = `<div class="history-domain">${escapeHtml(entry.domain)}</div>
      <div class="history-meta">${escapeHtml(t)} · ${escapeHtml(risk)}</div>
      <div class="history-preview">${escapeHtml(entry.preview || "")}</div>`;
    btn.addEventListener("click", () => {
      const hint = tr("historyViewingHint").replace("{domain}", entry.domain).replace("{time}", t);
      renderResults(entry.result, hint);
      $("resultSection")?.scrollIntoView({ behavior: "smooth" });
    });
    li.appendChild(btn);
    list.appendChild(li);
  }
}

async function clearHistory() {
  if (!confirm(tr("confirmClearHistory"))) return;
  await chrome.storage.local.set({ analysisHistory: [] });
  await renderHistoryList();
}

async function restoreLastAnalysis() {
  try {
    const data = await chrome.storage.local.get("lastPolicyAnalysis");
    const pack = data.lastPolicyAnalysis;
    if (!pack?.result) return;
    const t = pack.savedAt ? new Date(pack.savedAt).toLocaleString() : "";
    let src = tr("sourceLink");
    if (pack.meta?.source === "activeTab") src = tr("sourceTab");
    else if (pack.meta?.source === "paste") src = tr("sourcePaste");
    else if (pack.meta?.source === "contextMenu") src = tr("sourceContext");
    else if (pack.meta?.source === "upload") src = tr("sourceUpload");
    const hint = t ? tr("savedFrom").replace("{time}", t).replace("{source}", src) : "";
    renderResults(pack.result, hint);
  } catch {
    /* ignore */
  }
}

async function initPaste() {
  uiLocale = await I18n.getUiLocale();
  I18n.applyPasteLocale(uiLocale);
  document.title = I18n.strings(uiLocale).pasteDocTitle || "Paste & analyze — PolicyLens";

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes.uiLocale) {
      uiLocale = I18n.normalizeLocale(changes.uiLocale.newValue);
      I18n.applyPasteLocale(uiLocale);
      document.title = I18n.strings(uiLocale).pasteDocTitle || "Paste & analyze — PolicyLens";
    }
    if (area === "local" && changes.analysisHistory) {
      renderHistoryList();
    }
  });

  const { pendingPasteUiError } = await chrome.storage.local.get("pendingPasteUiError");
  if (pendingPasteUiError) {
    $("resultSection").classList.add("hidden");
    showError(pendingPasteUiError);
    await chrome.storage.local.remove("pendingPasteUiError");
    await renderHistoryList();
    return;
  }

  await restoreLastAnalysis();
  await renderHistoryList();
}

$("btnAnalyzePaste").addEventListener("click", () => analyzePasted());
$("btnClearHistory").addEventListener("click", () => clearHistory());
$("pasteNavSettings").addEventListener("click", (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});

initPaste().catch((e) => console.warn("PolicyLens: initPaste failed", e?.message || e));
