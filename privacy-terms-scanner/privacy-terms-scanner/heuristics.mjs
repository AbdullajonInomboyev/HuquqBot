/**
 * Link classification for policy/terms discovery. Shared with Node tests (`npm test`).
 */

export function normalizeUrl(href, base) {
  try {
    return new URL(href, base).href;
  } catch {
    return null;
  }
}

/** Visible text + accessibility strings (footer/icon links often have no text). */
export function linkHintStringFromAnchor(a) {
  return [
    a.textContent,
    a.getAttribute("aria-label"),
    a.getAttribute("title"),
    a.getAttribute("data-label"),
    a.getAttribute("data-testid"),
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Broad URL + label heuristics (many sites use opaque URLs or non-English copy).
 * @param {string} href Absolute URL
 * @param {string} [hintText]
 * @returns {"privacy"|"terms"|"pdf"|"other"|null}
 */
export function classify(href, hintText) {
  const h = href.toLowerCase();
  const t = (hintText || "").toLowerCase();
  const both = `${h}\n${t}`;

  if (/\.pdf(\?|#|$)/i.test(h) || h.endsWith(".pdf")) return "pdf";
  if (/[?&](fmt|format)=pdf(?:[&=#]|$)/i.test(h)) return "pdf";

  const privacyRe =
    /privacy|privac(y|idad)?|privacidad|datenschutz|gdpr|\brgpd\b|cookie(s)?[\s-]*polic(y|ies)|data[\s-]*polic(y|ies)|data[\s-]*protection|personal[\s-]*data|your[\s-]*privacy|consumer[\s-]*health|confidentialit[eé]|protecci[oó]n[\s-]*de[\s-]*datos/i;
  const termsRe =
    /terms|conditions|\btos\b|\btou\b|terms[\s-]*of[\s-]*(service|use)|legal[\s-]*(notice|information|terms)|user[\s-]*agreement|eula|nutzungsbedingungen|condiciones|terminos|mentions[\s-]*l[eé]gales|aviso[\s-]*legal|\bagb\b|impressum|imprint|disclaimer|rules\b|guidelines/i;
  const pathRe =
    /[/?#](legal|legals|law|compliance|transparency|policies|policy|terms?|tos|tou|eula|privacy|cookies?|imprint|impressum|agb|licen[cs]e|licensing)(\/|[/?#]|$)/i;
  const slugRe =
    /[/-](privacy|terms|legal|policy|policies|eula|tos|tou|cookies?|imprint|impressum|agb|disclaimer)(\.[a-z]+)?(\/|[?#]|$)/i;

  const privacyHit = privacyRe.test(both);
  const termsHit = termsRe.test(both);
  if (privacyHit && termsHit) return "terms";
  if (privacyHit) return "privacy";
  if (termsHit) return "terms";
  if (pathRe.test(h) || slugRe.test(h)) return "other";

  return null;
}
