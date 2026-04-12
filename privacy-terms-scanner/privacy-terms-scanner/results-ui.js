/**
 * Shared analysis result rendering for popup and paste page (classic scripts).
 */
(function (g) {
  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function riskWord(tr, level) {
    const l = (level || "low").toLowerCase();
    if (l === "medium") return tr("riskMedium");
    if (l === "high") return tr("riskHigh");
    return tr("riskLow");
  }

  /**
   * @param {(id: string) => HTMLElement | null} $
   * @param {(key: string) => string} tr
   */
  function asStringArray(v) {
    return Array.isArray(v) ? v : [];
  }

  function renderPolicyResults($, tr, data, hintText) {
    const resultSection = $("resultSection");
    if (resultSection) resultSection.classList.remove("hidden");
    const hint = $("lastRunHint");
    if (hint) {
      hint.textContent = hintText || "";
      hint.classList.toggle("hidden", !hintText);
    }
    const level = (data.overall_risk_level || "low").toLowerCase();
    const badge = $("riskBadge");
    if (badge) {
      badge.textContent = `${tr("riskPrefix")} ${riskWord(tr, level)}`;
      badge.className = "risk-badge " + (["low", "medium", "high"].includes(level) ? level : "low");
    }

    const summaryText = $("summaryText");
    if (summaryText) {
      summaryText.textContent =
        data.document_summary || data.overall_risk_rationale || tr("noSummary");
    }

    const findings = $("findingsList");
    if (findings) {
      findings.innerHTML = "";
      asStringArray(data.findings)
        .filter((f) => f && typeof f === "object")
        .forEach((f) => {
        const li = document.createElement("li");
        const sev = (f.severity || "info").toUpperCase();
        const title = escapeHtml(f.title || tr("findingFallback"));
        const lead = escapeHtml(f.what_it_says || "");
        const why = escapeHtml(f.why_it_matters || "");
        const ev = f.evidence ? escapeHtml(f.evidence) : "";
        const meta = [f.category, sev, f.confidence].filter(Boolean).join(" · ");
        const hasExtra = Boolean(why || ev || meta);
        const extraBlock = hasExtra
          ? `<details class="finding-more">
      <summary>${escapeHtml(tr("findingMore"))}</summary>
      <div class="finding-meta">${escapeHtml(meta)}</div>
      ${why ? `<div class="finding-extra"><em>${escapeHtml(tr("whyMatters"))}</em> ${why}</div>` : ""}
      ${ev ? `<div class="finding-extra"><em>${escapeHtml(tr("evidence"))}</em> ${ev}</div>` : ""}
    </details>`
          : "";
        li.innerHTML = `
      <div class="finding-title">${title}</div>
      ${lead ? `<div class="finding-lead">${lead}</div>` : ""}
      ${extraBlock}
    `;
        findings.appendChild(li);
      });
    }

    const qList = $("questionsList");
    if (qList) {
      qList.innerHTML = "";
      asStringArray(data.questions_for_user)
        .filter((q) => typeof q === "string")
        .forEach((q) => {
        const li = document.createElement("li");
        li.textContent = q;
        qList.appendChild(li);
      });
    }

    const mList = $("missingList");
    if (mList) {
      mList.innerHTML = "";
      asStringArray(data.missing_context)
        .filter((m) => typeof m === "string")
        .forEach((m) => {
        const li = document.createElement("li");
        li.textContent = m;
        mList.appendChild(li);
      });
    }

    const disclaimerText = $("disclaimerText");
    if (disclaimerText) {
      disclaimerText.textContent = data.not_legal_advice_disclaimer || tr("defaultDisclaimer");
    }
  }

  g.PolicyResults = { escapeHtml, renderPolicyResults };
})(typeof self !== "undefined" ? self : globalThis);
