/**
 * UI strings for en / ru / uz. Loaded before popup.js and options.js (classic scripts).
 */
(function (global) {
  const STORAGE_KEY = "uiLocale";

  const M = {
    en: {
      appTitle: "PolicyLens",
      optionsLink: "⚙ API",
      navPastePage: "📋 Paste",
      openPastePageTitle: "Paste & analyze policy text (full page)",
      optionsTitle: "Options",
      optIntro:
        'Choose <strong>Google Gemini</strong> (AI Studio API key) or an <strong>OpenAI-compatible</strong> endpoint. Settings are stored in <code>chrome.storage.sync</code>.',
      labelUiLocale: "Interface language",
      labelLlmProvider: "LLM provider",
      geminiOption: "Google Gemini (Generative Language API)",
      openaiOption: "OpenAI-compatible (chat completions)",
      labelGeminiUrl: "Gemini API base URL (optional)",
      geminiUrlNote: "Leave default unless you use a custom Google endpoint.",
      labelOpenaiUrl: "OpenAI API base URL",
      labelModel: "Model",
      labelApiKey: "API key",
      apiKeySyncNote:
        "If Chrome sync is enabled, settings—including your API key—may sync to your Google account and other devices where you are signed in.",
      saveButton: "Save",
      savedStatus: "Saved.",
      optPageTitle: "PolicyLens — Options",
      btnScan: "Scan this page",
      scanHintHtml:
        'Finds privacy, terms, and PDF links in the page. If none match, open the policy in this tab and use <strong>Analyze this tab</strong>.',
      sectionCurrentTab: "Current tab",
      hintCurrentTab:
        "For normal web pages we read the live DOM. For URLs that serve a PDF (even without a .pdf suffix), we fetch the file and extract text with PDF.js—so Chrome’s PDF viewer tabs work too.",
      btnAnalyzeTab: "Analyze this tab",
      sectionLinks: "Found links",
      sectionPaste: "Paste policy text",
      hintPaste:
        "Use this for PDFs or pages that block automatic fetch. Paste at least 80 characters (same minimum as fetched text).",
      placeholderPaste: "Paste policy or terms text here…",
      btnAnalyzePaste: "Analyze pasted text",
      sectionAnalysis: "Analysis",
      findingsTitle: "Findings",
      questionsTitle: "Questions to verify",
      missingTitle: "Missing context",
      riskPrefix: "Risk:",
      riskLow: "low",
      riskMedium: "medium",
      riskHigh: "high",
      noSummary: "No summary returned.",
      whyMatters: "Why it matters:",
      evidence: "Evidence:",
      findingMore: "More detail",
      defaultDisclaimer: "This is informational pattern detection, not legal advice.",
      linkAnalyze: "Analyze",
      linkOpen: "Open",
      errNoTab: "No active tab.",
      errBrowserPage: "This page cannot be scanned (browser internal URL).",
      errBrowserPageAnalyze: "Switch to a normal website tab where the policy is visible, then try again.",
      statusScanning: "Scanning page…",
      errLoadScanner: "Could not load link scanner:",
      errNoLinks: "No privacy/terms/PDF links matched heuristics on this page.",
      errReachPage: "Could not reach the page. Try reloading the tab, then scan again.",
      errInvalidUrl: "Invalid link URL.",
      statusFetchingAria: "Fetching policy",
      errNoResponseBg:
        'No response from the extension background. Open chrome://extensions → this extension → “Service worker” → Inspect, reload the extension, and try again. Very large file uploads can also cause this.',
      errUnknown: "Unknown error.",
      statusReadingTab: "Reading this tab (iframes/shadow DOM where allowed), then calling the LLM…",
      errNoResponseReload:
        "No response from the extension background. Reload the extension or keep this popup open until the run finishes. Very large uploads can fail silently.",
      statusCallingLlm: "Calling LLM…",
      errNoResponseConsole:
        "No response from the extension background. Reload the extension and check the service worker console for errors. Try a smaller file if you were uploading.",
      savedFrom: "Showing saved analysis from {time} ({source}). Run again to refresh.",
      sourceTab: "this tab",
      sourcePaste: "pasted text",
      sourceLink: "a link",
      sourceContext: "right-click link",
      findingFallback: "Finding",
      pasteDocTitle: "Paste & analyze — PolicyLens",
      pasteNavSettings: "API settings",
      pasteIntro:
        'Tip: Right-click any http(s) link (e.g. Privacy policy in the footer) and choose “Analyze link with PolicyLens”.',
      linkPastePage: "Paste policy text (full page)",
      sectionHistoryHeading: "Analysis history",
      hintHistory: "Recent analyses by website domain or file name. Click a row to view the saved result.",
      btnClearHistory: "Clear history",
      historyEmpty: "No history yet. Run an analysis from this page, the toolbar, or a link.",
      historyViewingHint: "History · {domain} · {time}",
      confirmClearHistory: "Remove all entries from analysis history?",
      sourceUpload: "uploaded file",
    },
    ru: {
      appTitle: "PolicyLens",
      optionsLink: "⚙ API",
      navPastePage: "📋 Вставить",
      openPastePageTitle: "Вставить текст и анализ (полная страница)",
      optionsTitle: "Настройки",
      optIntro:
        'Выберите <strong>Google Gemini</strong> (ключ AI Studio) или <strong>совместимый с OpenAI</strong> endpoint. Настройки хранятся в <code>chrome.storage.sync</code>.',
      labelUiLocale: "Язык интерфейса",
      labelLlmProvider: "Провайдер LLM",
      geminiOption: "Google Gemini (Generative Language API)",
      openaiOption: "Совместимый с OpenAI (chat completions)",
      labelGeminiUrl: "Базовый URL Gemini API (необязательно)",
      geminiUrlNote: "Оставьте по умолчанию, если не используете свой endpoint Google.",
      labelOpenaiUrl: "Базовый URL OpenAI API",
      labelModel: "Модель",
      labelApiKey: "API-ключ",
      apiKeySyncNote:
        "При включённой синхронизации Chrome настройки, включая API-ключ, могут синхронизироваться с аккаунтом Google и другими устройствами.",
      saveButton: "Сохранить",
      savedStatus: "Сохранено.",
      optPageTitle: "PolicyLens — Настройки",
      btnScan: "Сканировать страницу",
      scanHintHtml:
        'Ищет ссылки на политику конфиденциальности, условия и PDF. Если ничего не найдено — откройте документ во вкладке и нажмите <strong>Анализ этой вкладки</strong>.',
      sectionCurrentTab: "Текущая вкладка",
      hintCurrentTab:
        "Для обычных страниц читаем DOM. Для URL с PDF (в т.ч. без суффикса .pdf) загружаем файл и извлекаем текст через PDF.js — в том числе во встроенном просмотрщике Chrome.",
      btnAnalyzeTab: "Анализ этой вкладки",
      sectionLinks: "Найденные ссылки",
      sectionPaste: "Вставить текст политики",
      hintPaste:
        "Для PDF или страниц, которые нельзя загрузить автоматически. Минимум 80 символов (как при загрузке).",
      placeholderPaste: "Вставьте текст политики или условий…",
      btnAnalyzePaste: "Анализ вставленного текста",
      sectionAnalysis: "Анализ",
      findingsTitle: "Находки",
      questionsTitle: "Вопросы для проверки",
      missingTitle: "Недостающий контекст",
      riskPrefix: "Риск:",
      riskLow: "низкий",
      riskMedium: "средний",
      riskHigh: "высокий",
      noSummary: "Краткое содержание не получено.",
      whyMatters: "Почему это важно:",
      evidence: "Цитата:",
      findingMore: "Подробнее",
      defaultDisclaimer: "Это информационный анализ шаблонов, а не юридическая консультация.",
      linkAnalyze: "Анализ",
      linkOpen: "Открыть",
      errNoTab: "Нет активной вкладки.",
      errBrowserPage: "Эту страницу нельзя сканировать (системная страница браузера).",
      errBrowserPageAnalyze:
        "Переключитесь на обычный сайт, где видна политика, и попробуйте снова.",
      statusScanning: "Сканирование…",
      errLoadScanner: "Не удалось загрузить сканер ссылок:",
      errNoLinks: "Эвристики не нашли ссылки на политику/условия/PDF.",
      errReachPage: "Не удалось связаться со страницей. Перезагрузите вкладку и повторите.",
      errInvalidUrl: "Некорректный URL ссылки.",
      statusFetchingAria: "Загрузка политики",
      errNoResponseBg:
        "Нет ответа от фона расширения. Откройте chrome://extensions → сервис-воркер → Inspect, перезагрузите расширение и повторите. Очень большие загрузки файлов тоже могут вызывать это.",
      errUnknown: "Неизвестная ошибка.",
      statusReadingTab: "Чтение вкладки (iframe/shadow DOM где возможно), затем запрос к LLM…",
      errNoResponseReload:
        "Нет ответа от фона. Перезагрузите расширение или держите всплывающее окно открытым до конца. Очень большие файлы могут «молча» не проходить.",
      statusCallingLlm: "Запрос к LLM…",
      errNoResponseConsole:
        "Нет ответа от фона. Перезагрузите расширение и проверьте консоль сервис-воркера. Попробуйте меньший файл, если шла загрузка.",
      savedFrom: "Показан сохранённый анализ от {time} ({source}). Запустите снова для обновления.",
      sourceTab: "эта вкладка",
      sourcePaste: "вставленный текст",
      sourceLink: "ссылка",
      sourceContext: "ссылка из меню",
      findingFallback: "Находка",
      pasteDocTitle: "Вставка и анализ — PolicyLens",
      pasteNavSettings: "Настройки API",
      pasteIntro:
        'Совет: щёлкните правой кнопкой по ссылке http(s) (например «Политика конфиденциальности» в подвале) и выберите «Analyze link with PolicyLens».',
      linkPastePage: "Вставить текст политики (полная страница)",
      sectionHistoryHeading: "История анализов",
      hintHistory: "Недавние анализы по сайту или имени файла. Нажмите строку, чтобы открыть результат.",
      btnClearHistory: "Очистить историю",
      historyEmpty: "Истории пока нет. Запустите анализ с этой страницы, из панели или по ссылке.",
      historyViewingHint: "История · {domain} · {time}",
      confirmClearHistory: "Удалить все записи истории анализов?",
      sourceUpload: "загруженный файл",
    },
    uz: {
      appTitle: "PolicyLens",
      optionsLink: "⚙ API",
      navPastePage: "📋 Joylash",
      openPastePageTitle: "Matn joylash va tahlil (to‘liq sahifa)",
      optionsTitle: "Sozlamalar",
      optIntro:
        '<strong>Google Gemini</strong> (AI Studio kaliti) yoki <strong>OpenAI-ga mos</strong> endpoint tanlang. Sozlamalar <code>chrome.storage.sync</code> da saqlanadi.',
      labelUiLocale: "Interfeys tili",
      labelLlmProvider: "LLM provayderi",
      geminiOption: "Google Gemini (Generative Language API)",
      openaiOption: "OpenAI-mos (chat completions)",
      labelGeminiUrl: "Gemini API bazaviy URL (ixtiyoriy)",
      geminiUrlNote: "Maxsus Google endpoint ishlatmasangiz, standartni qoldiring.",
      labelOpenaiUrl: "OpenAI API bazaviy URL",
      labelModel: "Model",
      labelApiKey: "API kaliti",
      apiKeySyncNote:
        "Chrome sinxronizatsiyasi yoqilgan bo‘lsa, sozlamalar (API kaliti bilan) Google hisobingiz va boshqa qurilmalarga sinxronlanishi mumkin.",
      saveButton: "Saqlash",
      savedStatus: "Saqlandi.",
      optPageTitle: "PolicyLens — Sozlamalar",
      btnScan: "Ushbu sahifani skanerlash",
      scanHintHtml:
        'Maxfiylik, shartlar va PDF havolalarini qidiradi. Hech narsa topilmasa, hujjatni shu varaqda oching va <strong>Ushbu varaqni tahlil qilish</strong> tugmasini bosing.',
      sectionCurrentTab: "Joriy varaq",
      hintCurrentTab:
        "Oddiy veb-sahifalar uchun DOM o‘qiladi. PDF beruvchi URL uchun (juda .pdf bo‘lmasa ham) fayl yuklanadi va PDF.js orqali matn olinadi — Chrome PDF ko‘ruvchisi ham qo‘llab-quvvatlanadi.",
      btnAnalyzeTab: "Ushbu varaqni tahlil qilish",
      sectionLinks: "Topilgan havolalar",
      sectionPaste: "Siyosat matnini joylash",
      hintPaste:
        "PDF yoki avtomatik yuklab bo‘lmaydigan sahifalar uchun. Kamida 80 belgi (yuklangan matn bilan bir xil minimum).",
      placeholderPaste: "Siyosat yoki shartlar matnini shu yerga joylang…",
      btnAnalyzePaste: "Joylangan matnni tahlil qilish",
      sectionAnalysis: "Tahlil",
      findingsTitle: "Topilganlar",
      questionsTitle: "Tekshirish uchun savollar",
      missingTitle: "Yetishmayotgan kontekst",
      riskPrefix: "Xavf:",
      riskLow: "past",
      riskMedium: "o‘rta",
      riskHigh: "yuqori",
      noSummary: "Qisqa xulosa kelmadi.",
      whyMatters: "Nima uchun muhim:",
      evidence: "Dalil:",
      findingMore: "Batafsil",
      defaultDisclaimer: "Bu huquqiy maslahat emas, balki axborot tahlilidir.",
      linkAnalyze: "Tahlil",
      linkOpen: "Ochish",
      errNoTab: "Faol varaq yo‘q.",
      errBrowserPage: "Bu sahifani skanerlab bo‘lmaydi (brauzer ichki manzili).",
      errBrowserPageAnalyze: "Oddiy veb-saytga o‘ting, siyosat ko‘rinsin, keyin qayta urining.",
      statusScanning: "Sahifa skanerlanmoqda…",
      errLoadScanner: "Havola skanerini yuklab bo‘lmadi:",
      errNoLinks: "Sahifada maxfiylik/shartlar/PDF havolalari topilmadi.",
      errReachPage: "Sahifaga ulanib bo‘lmadi. Varaqni yangilab, qayta urining.",
      errInvalidUrl: "Havola manzili noto‘g‘ri.",
      statusFetchingAria: "Siyosat yuklanmoqda",
      errNoResponseBg:
        "Kengaytma fonidan javob yo‘q. chrome://extensions → xizmat ishchisi → Inspect, kengaytmani qayta yuklab urining. Juda katta fayl yuklash ham sabab bo‘lishi mumkin.",
      errUnknown: "Noma’lum xato.",
      statusReadingTab: "Varaq o‘qilmoqda (iframe/shadow DOM mumkin bo‘lsa), keyin LLM…",
      errNoResponseReload:
        "Fondan javob yo‘q. Kengaytmani qayta yuklang yoki ochiq turgan payt tugaguncha kuting. Juda katta fayllar yashirin xato berishi mumkin.",
      statusCallingLlm: "LLM chaqirilmoqda…",
      errNoResponseConsole:
        "Fondan javob yo‘q. Kengaytmani yangilang va xizmat ishchisi konsolini tekshiring. Yuklash bo‘yicha kichikroq fayl bilan urinib ko‘ring.",
      savedFrom: "Saqlangan tahlil ko‘rsatilmoqda: {time} ({source}). Yangilash uchun qayta ishga tushiring.",
      sourceTab: "shu varaq",
      sourcePaste: "joylangan matn",
      sourceLink: "havola",
      sourceContext: "o‘ng tugma havolasi",
      findingFallback: "Topilgan",
      pasteDocTitle: "Joylash va tahlil — PolicyLens",
      pasteNavSettings: "API sozlamalari",
      pasteIntro:
        'Maslahat: http(s) havolaga (masalan, pastki qismdagi «Maxfiylik siyosati») o‘ng tugma bilan bosing va «Analyze link with PolicyLens» ni tanlang.',
      linkPastePage: "Siyosat matnini joylash (to‘liq sahifa)",
      sectionHistoryHeading: "Tahlillar tarixi",
      hintHistory: "Sayt domeni yoki fayl nomi bo‘yicha. Natijani ko‘rish uchun qatorni bosing.",
      btnClearHistory: "Tarixni tozalash",
      historyEmpty: "Hozircha tarix yo‘q. Ushbu sahifa, panel yoki havola orqali tahlil ishga tushiring.",
      historyViewingHint: "Tarix · {domain} · {time}",
      confirmClearHistory: "Barcha tarix yozuvlarini o‘chirasizmi?",
      sourceUpload: "yuklangan fayl",
    },
  };

  function normalizeLocale(code) {
    if (code === "ru" || code === "uz") return code;
    return "en";
  }

  async function getUiLocale() {
    try {
      const d = await chrome.storage.sync.get(STORAGE_KEY);
      return normalizeLocale(d[STORAGE_KEY]);
    } catch {
      return "en";
    }
  }

  function strings(lang) {
    return M[normalizeLocale(lang)] || M.en;
  }

  function t(lang, key) {
    const s = strings(lang)[key];
    return s !== undefined ? s : M.en[key] || key;
  }

  /** Options page: apply all option-related strings (call after DOM ready). */
  function applyOptionsLocale(lang) {
    const S = strings(lang);
    const set = (id, key) => {
      const el = document.getElementById(id);
      if (el && S[key] !== undefined) el.textContent = S[key];
    };
    const setHtml = (id, key) => {
      const el = document.getElementById(id);
      if (el && S[key] !== undefined) el.innerHTML = S[key];
    };
    set("optTitle", "appTitle");
    setHtml("optIntro", "optIntro");
    if (S.optPageTitle) document.title = S.optPageTitle;
    set("labelUiLocale", "labelUiLocale");
    set("labelLlmProvider", "labelLlmProvider");
    set("labelGeminiUrl", "labelGeminiUrl");
    set("labelOpenaiUrl", "labelOpenaiUrl");
    set("labelModel", "labelModel");
    set("labelApiKey", "labelApiKey");
    set("apiKeySyncNote", "apiKeySyncNote");
    set("geminiUrlNote", "geminiUrlNote");
    set("save", "saveButton");
    const lp = document.getElementById("linkToPaste");
    if (lp) lp.textContent = S.linkPastePage;
    const prov = document.getElementById("llmProvider");
    if (prov) {
      const o0 = prov.querySelector('option[value="gemini"]');
      const o1 = prov.querySelector('option[value="openai"]');
      if (o0) o0.textContent = S.geminiOption;
      if (o1) o1.textContent = S.openaiOption;
    }
    document.documentElement.lang = lang === "ru" ? "ru" : lang === "uz" ? "uz" : "en";
  }

  /** Popup: static labels and hints. */
  function applyPopupLocale(lang) {
    const S = strings(lang);
    const set = (id, key) => {
      const el = document.getElementById(id);
      if (el && S[key] !== undefined) {
        if (key === "scanHintHtml") el.innerHTML = S[key];
        else el.textContent = S[key];
      }
    };
    set("appTitle", "appTitle");
    const opt = document.getElementById("openOptions");
    if (opt) {
      opt.textContent = S.optionsLink;
      opt.title = S.optionsTitle;
    }
    const pasteL = document.getElementById("openPastePage");
    if (pasteL) {
      pasteL.textContent = S.navPastePage;
      pasteL.title = S.openPastePageTitle;
    }
    set("btnScan", "btnScan");
    set("scanHint", "scanHintHtml");
    set("sectionCurrentTabHeading", "sectionCurrentTab");
    set("hintCurrentTab", "hintCurrentTab");
    set("btnAnalyzeTab", "btnAnalyzeTab");
    set("sectionLinksHeading", "sectionLinks");
    set("sectionAnalysisHeading", "sectionAnalysis");
    set("findingsSummary", "findingsTitle");
    set("questionsSummary", "questionsTitle");
    set("missingSummary", "missingTitle");
    document.documentElement.lang = lang === "ru" ? "ru" : lang === "uz" ? "uz" : "en";
  }

  function applyPasteLocale(lang) {
    const S = strings(lang);
    const set = (id, key) => {
      const el = document.getElementById(id);
      if (el && S[key] !== undefined) el.textContent = S[key];
    };
    set("pasteAppTitle", "appTitle");
    set("sectionPasteHeading", "sectionPaste");
    set("hintPaste", "hintPaste");
    set("pasteIntro", "pasteIntro");
    const ta = document.getElementById("pasteArea");
    if (ta) ta.placeholder = S.placeholderPaste;
    set("btnAnalyzePaste", "btnAnalyzePaste");
    set("pasteNavSettings", "pasteNavSettings");
    set("sectionHistoryHeading", "sectionHistoryHeading");
    set("hintHistory", "hintHistory");
    set("btnClearHistory", "btnClearHistory");
    set("historyEmpty", "historyEmpty");
    set("sectionAnalysisHeading", "sectionAnalysis");
    set("findingsSummary", "findingsTitle");
    set("questionsSummary", "questionsTitle");
    set("missingSummary", "missingTitle");
    document.documentElement.lang = lang === "ru" ? "ru" : lang === "uz" ? "uz" : "en";
  }

  global.I18n = {
    STORAGE_KEY,
    normalizeLocale,
    getUiLocale,
    strings,
    t,
    applyOptionsLocale,
    applyPopupLocale,
    applyPasteLocale,
  };
})(typeof self !== "undefined" ? self : globalThis);
