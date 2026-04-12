const $ = (id) => document.getElementById(id);

let uiLocale = "en";

function tr(key) {
  return I18n.t(uiLocale, key);
}

function setButtonsBusy(busy) {
  $("btnScan").disabled = busy;
  $("btnAnalyzeTab").disabled = busy;
  document.querySelectorAll(".row-actions button").forEach((b) => {
    b.disabled = busy;
  });
}

const { showStatus, hideStatus, showError } = StatusUi.createStatusHelpers({ variant: "popup" });

function renderResults(data, hintText) {
  PolicyResults.renderPolicyResults($, tr, data, hintText);
}

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function scanPage() {
  hideStatus();
  $("resultSection").classList.add("hidden");
  $("linksSection").classList.add("hidden");
  $("linkList").innerHTML = "";

  const tab = await getActiveTab();
  if (!tab?.id) {
    showError(tr("errNoTab"));
    return;
  }

  if (tab.url?.startsWith("chrome://") || tab.url?.startsWith("edge://")) {
    showError(tr("errBrowserPage"));
    return;
  }

  setButtonsBusy(true);
  showStatus(tr("statusScanning"));
  try {
    const res = await chrome.tabs.sendMessage(tab.id, { type: "SCAN_LINKS" });
    if (res?.loadError) {
      showError(`${tr("errLoadScanner")} ${res.loadError}`);
      return;
    }
    if (!res?.links?.length) {
      showError(tr("errNoLinks"));
      return;
    }
    $("linksSection").classList.remove("hidden");
    const list = $("linkList");
    res.links.forEach((link) => {
      const li = document.createElement("li");
      const meta = document.createElement("span");
      meta.className = "meta";
      meta.textContent = link.kind || "";
      const label = document.createElement("span");
      label.className = "label";
      label.textContent = link.label || "";
      let href = "#";
      try {
        href = new URL(link.url).href;
      } catch {
        /* ignore */
      }
      const a = document.createElement("a");
      a.className = "url";
      a.href = href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = link.url || "";
      const actions = document.createElement("div");
      actions.className = "row-actions";
      const btnAnalyze = document.createElement("button");
      btnAnalyze.type = "button";
      btnAnalyze.dataset.action = "analyze";
      btnAnalyze.textContent = tr("linkAnalyze");
      const btnOpen = document.createElement("button");
      btnOpen.type = "button";
      btnOpen.dataset.action = "open";
      btnOpen.textContent = tr("linkOpen");
      btnOpen.addEventListener("click", () => chrome.tabs.create({ url: href }));
      btnAnalyze.addEventListener("click", () => runAnalyzeUrl(href, res.pageUrl, res.pageTitle));
      actions.append(btnAnalyze, btnOpen);
      li.append(meta, label, a, actions);
      list.appendChild(li);
    });
    hideStatus();
  } catch {
    showError(tr("errReachPage"));
  } finally {
    setButtonsBusy(false);
  }
}

async function runAnalyzeUrl(url, pageUrl, pageTitle) {
  if (!url || url === "#") {
    showError(tr("errInvalidUrl"));
    return;
  }

  hideStatus();
  $("resultSection").classList.add("hidden");
  setButtonsBusy(true);
  showStatus("", { loading: true, dotsOnly: true, ariaLabel: tr("statusFetchingAria") });

  try {
    const resp = await chrome.runtime.sendMessage({
      type: "FETCH_AND_ANALYZE",
      url,
      pageUrl,
      pageTitle,
    });

    if (resp === undefined) {
      showError(tr("errNoResponseBg"));
      return;
    }

    if (!resp.ok) {
      showError(resp.error || tr("errUnknown"));
      return;
    }

    hideStatus();
    renderResults(resp.result, "");
  } catch (e) {
    showError(e?.message || String(e));
  } finally {
    setButtonsBusy(false);
  }
}

async function analyzeThisTab() {
  hideStatus();
  $("resultSection").classList.add("hidden");
  const tab = await getActiveTab();
  if (!tab?.id) {
    showError(tr("errNoTab"));
    return;
  }
  if (tab.url?.startsWith("chrome://") || tab.url?.startsWith("edge://")) {
    showError(tr("errBrowserPageAnalyze"));
    return;
  }

  setButtonsBusy(true);
  showStatus(tr("statusReadingTab"), { loading: true });

  try {
    const resp = await chrome.runtime.sendMessage({
      type: "ANALYZE_TAB",
      tabId: tab.id,
    });

    if (resp === undefined) {
      showError(tr("errNoResponseReload"));
      return;
    }

    if (!resp.ok) {
      showError(resp.error || tr("errUnknown"));
      return;
    }

    hideStatus();
    renderResults(resp.result, "");
  } catch (e) {
    showError(e?.message || String(e));
  } finally {
    setButtonsBusy(false);
  }
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

async function initPopup() {
  uiLocale = await I18n.getUiLocale();
  I18n.applyPopupLocale(uiLocale);
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes.uiLocale) {
      uiLocale = I18n.normalizeLocale(changes.uiLocale.newValue);
      I18n.applyPopupLocale(uiLocale);
    }
  });
}

$("btnScan").addEventListener("click", () => scanPage());
$("btnAnalyzeTab").addEventListener("click", () => analyzeThisTab());
$("openPastePage").addEventListener("click", (e) => {
  e.preventDefault();
  chrome.tabs.create({ url: chrome.runtime.getURL("paste.html") });
});
$("openOptions").addEventListener("click", (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});

initPopup()
  .then(() => restoreLastAnalysis())
  .catch((e) => console.warn("PolicyLens: initPopup failed", e?.message || e));
