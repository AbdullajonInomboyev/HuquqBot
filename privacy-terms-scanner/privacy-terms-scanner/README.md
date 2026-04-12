# PolicyLens

Chrome extension (Manifest V3) that finds **privacy policy** and **terms of service** links on the current page, fetches the text (including PDFs), and analyzes it with an LLM to surface suspicious or unfair clauses.

## Features

- **Link discovery** — Heuristics in the content script scan the page for likely privacy/terms URLs.
- **PDF support** — Policy PDFs are rendered with vendored [PDF.js](https://mozilla.github.io/pdf.js/) (`vendor/pdfjs/`).
- **LLM analysis** — Choose **Google Gemini** (Generative Language API) or an **OpenAI-compatible** chat-completions API. Prompts live in `prompts.js` (used by the service worker).
- **i18n** — Options and UI support multiple interface languages (see `options.html` / `i18n.js`).

## Requirements

- **Chrome** (or another Chromium browser that supports Manifest V3 extensions).
- An **API key** for Gemini (e.g. [Google AI Studio](https://aistudio.google.com/)) or for your OpenAI-compatible provider.

## Install (load unpacked)

1. Clone this repository.
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the repository root folder.
4. Open the extension’s **Options** page and set your LLM provider, model name, and API key. Settings are stored in `chrome.storage.sync`.

Optional: run `npm install` if you plan to run tests or refresh the PDF.js vendor bundle (see [Development](#development)).

## Usage

1. Visit a website (or a tab that shows a PDF in Chrome’s viewer).
2. Open the PolicyLens popup from the toolbar:
   - **Scan this page** — finds privacy/terms links (and PDFs) in the page DOM.
   - **Analyze this tab** — analyzes the current tab’s content (HTML or PDF via PDF.js).
3. Optionally **right-click a link** and choose **Analyze link with PolicyLens**.
4. Review the risk summary and findings. From the popup header you can open **Paste** (full-page paste) or **API** (options). The Options page also links to the paste flow.

> **Privacy:** API keys and preferences stay in your browser’s extension storage. Review your provider’s terms for how prompts and policy text are processed.

## Development

| Topic | Location |
|--------|-----------|
| Service worker (LLM calls, orchestration) | `background.js` (ES module — see `manifest.json`) |
| Page scanning & heuristics | `content.js`, `heuristics.mjs` |
| Prompts | `prompts.js` |
| Extension UI | `popup.html`, `popup.js`, `options.html`, `options.js`, `paste.html`, `paste.js` |
| PDF.js upgrade | `npm run vendor:pdfjs` (copies from `pdfjs-dist` after `npm install`) |

**Tests**

```bash
npm install
npm test
```

Runs Node’s built-in test runner on `test/heuristics.test.mjs`.

**PDF.js**

The extension ships vendored PDF.js under `vendor/pdfjs/`. After changing the `pdfjs-dist` version in `package.json`:

```bash
npm install
npm run vendor:pdfjs
```

The browser loads `background.js` as an ES module; `package.json` `"main"` is not used at runtime.

## Version

The version shown in Chrome comes from `manifest.json` (also mirrored in `package.json`).

## License

ISC (see `package.json`).
