const heuristicsPromise = import(chrome.runtime.getURL("heuristics.mjs"));

function buildScanResult(normalizeUrl, linkHintStringFromAnchor, classify) {
  const base = location.href;
  const seen = new Set();
  const out = [];

  const anchors = document.querySelectorAll("a[href], area[href]");
  anchors.forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("javascript:") || href === "#") return;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
    const abs = normalizeUrl(href, base);
    if (!abs || seen.has(abs)) return;

    const kind = classify(abs, linkHintStringFromAnchor(a));
    if (!kind) return;

    seen.add(abs);
    out.push({
      url: abs,
      label: (a.textContent || "").trim().slice(0, 200) || abs,
      kind,
    });
  });

  /** If you are already on a policy URL but the page has no matching <a> (SPA, buttons only), still offer this tab. */
  const selfUrl = location.href;
  if (!seen.has(selfUrl)) {
    const pageHint = `${document.title || ""}\n${(document.body && document.body.innerText) || ""}`.slice(0, 600);
    const selfKind = classify(selfUrl, pageHint);
    if (selfKind) {
      seen.add(selfUrl);
      out.push({
        url: selfUrl,
        label: `This page (${(document.title || "current URL").trim().slice(0, 120)})`,
        kind: selfKind,
      });
    }
  }

  out.sort((a, b) => {
    const order = { privacy: 0, terms: 1, pdf: 2, other: 3 };
    return (order[a.kind] ?? 9) - (order[b.kind] ?? 9);
  });

  return { links: out, pageUrl: base, pageTitle: document.title || "" };
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg?.type === "SCAN_LINKS") {
    heuristicsPromise
      .then((m) => {
        sendResponse(buildScanResult(m.normalizeUrl, m.linkHintStringFromAnchor, m.classify));
      })
      .catch((err) => {
        sendResponse({
          links: [],
          pageUrl: location.href,
          pageTitle: document.title || "",
          loadError: err?.message || String(err),
        });
      });
    return true;
  }
  return false;
});
