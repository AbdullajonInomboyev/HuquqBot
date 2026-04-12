import test from "node:test";
import assert from "node:assert/strict";
import { normalizeUrl, classify, linkHintStringFromAnchor } from "../heuristics.mjs";

test("normalizeUrl resolves relative hrefs", () => {
  assert.equal(normalizeUrl("/privacy", "https://example.com/app/page"), "https://example.com/privacy");
  assert.equal(normalizeUrl("relative", "not-a-valid-base"), null);
});

test("classify detects PDF URLs", () => {
  assert.equal(classify("https://x.com/legal.pdf", ""), "pdf");
  assert.equal(classify("https://x.com/doc?fmt=pdf", "download"), "pdf");
  assert.equal(classify("https://x.com/doc?format=pdf#x", ""), "pdf");
});

test("classify privacy and terms", () => {
  assert.equal(classify("https://example.com/x", "Privacy Policy"), "privacy");
  assert.equal(classify("https://example.com/terms-of-service", ""), "terms");
  assert.equal(classify("https://cdn.example.com/en/legal", ""), "other");
  assert.equal(
    classify("https://example.com/legal", "Privacy Policy and Terms of Service"),
    "terms"
  );
});

test("linkHintStringFromAnchor reads hint attributes", () => {
  const el = {
    textContent: "",
    getAttribute(name) {
      return name === "aria-label" ? "Terms of use" : null;
    },
  };
  assert.match(linkHintStringFromAnchor(el), /Terms of use/);
});
