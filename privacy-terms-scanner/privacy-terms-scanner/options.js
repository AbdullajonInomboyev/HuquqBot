const $ = (id) => document.getElementById(id);

const DEFAULTS = {
  gemini: {
    model: "gemini-flash-latest",
    modelPlaceholder: "gemini-flash-latest",
    geminiBaseUrl: "https://generativelanguage.googleapis.com/v1beta",
  },
  openai: {
    model: "gpt-4o-mini",
    modelPlaceholder: "gpt-4o-mini",
    apiBaseUrl: "https://api.openai.com/v1",
  },
};

function syncProviderUi() {
  const provider = $("llmProvider").value;
  const isGemini = provider === "gemini";
  $("openaiFields").classList.toggle("hidden", isGemini);
  $("geminiAdvanced").classList.toggle("hidden", !isGemini);
  $("model").placeholder = isGemini ? DEFAULTS.gemini.modelPlaceholder : DEFAULTS.openai.modelPlaceholder;
}

$("llmProvider").addEventListener("change", () => {
  const provider = $("llmProvider").value;
  const defs = DEFAULTS[provider];
  if (defs.model && !$("model").dataset.userEdited) {
    $("model").value = defs.model;
  }
  syncProviderUi();
});

$("uiLocale").addEventListener("change", () => {
  I18n.applyOptionsLocale(I18n.normalizeLocale($("uiLocale").value));
});

$("linkToPaste").addEventListener("click", (e) => {
  e.preventDefault();
  chrome.tabs.create({ url: chrome.runtime.getURL("paste.html") });
});

async function load() {
  const d = await chrome.storage.sync.get([
    "llmProvider",
    "apiKey",
    "apiBaseUrl",
    "geminiBaseUrl",
    "model",
    "uiLocale",
  ]);

  const provider = d.llmProvider === "openai" ? "openai" : "gemini";
  $("llmProvider").value = provider;

  $("apiBaseUrl").value = d.apiBaseUrl || DEFAULTS.openai.apiBaseUrl;
  $("geminiBaseUrl").value = d.geminiBaseUrl || DEFAULTS.gemini.geminiBaseUrl;

  const defaultModel = provider === "gemini" ? DEFAULTS.gemini.model : DEFAULTS.openai.model;
  $("model").value = d.model?.trim() || defaultModel;
  $("model").dataset.userEdited = d.model ? "1" : "";

  $("apiKey").value = d.apiKey || "";

  const uiLocale = I18n.normalizeLocale(d.uiLocale);
  $("uiLocale").value = uiLocale;
  I18n.applyOptionsLocale(uiLocale);

  syncProviderUi();
}

$("model").addEventListener("input", () => {
  $("model").dataset.userEdited = "1";
});

$("save").addEventListener("click", async () => {
  const llmProvider = $("llmProvider").value === "openai" ? "openai" : "gemini";
  const apiKey = $("apiKey").value.trim();
  const model =
    $("model").value.trim() ||
    (llmProvider === "gemini" ? DEFAULTS.gemini.model : DEFAULTS.openai.model);

  const apiBaseUrl =
    $("apiBaseUrl").value.trim().replace(/\/$/, "") || DEFAULTS.openai.apiBaseUrl;

  let geminiBaseUrl =
    $("geminiBaseUrl").value.trim().replace(/\/$/, "") || DEFAULTS.gemini.geminiBaseUrl;

  const uiLocale = I18n.normalizeLocale($("uiLocale").value);

  await chrome.storage.sync.set({
    llmProvider,
    apiKey,
    model,
    apiBaseUrl,
    geminiBaseUrl,
    uiLocale,
  });
  const S = I18n.strings(uiLocale);
  $("status").textContent = S.savedStatus || "Saved.";
  setTimeout(() => {
    $("status").textContent = "";
  }, 2000);
});

load();
