/**
 * Shared status row helpers for popup (dots-only / ARIA) and paste (simple) pages.
 */
(function (g) {
  /**
   * @param {{ variant: "popup" | "paste" }} opts
   */
  function createStatusHelpers(opts) {
    const variant = opts.variant === "popup" ? "popup" : "paste";
    const $ = (id) => document.getElementById(id);

    function setStatusLoading(active) {
      const dots = $("statusDots");
      if (dots) dots.classList.toggle("status-dots--active", active);
    }

    function showStatus(message, statusOpts) {
      statusOpts = statusOpts || {};
      const loading = Boolean(statusOpts.loading);
      const st = $("statusSection");
      const tx = $("statusText");
      st.classList.remove("hidden");
      tx.style.color = "";

      if (variant === "popup") {
        const dotsOnly = Boolean(statusOpts.dotsOnly);
        const row = $("statusRow");
        tx.textContent = dotsOnly ? "" : message;
        if (dotsOnly && statusOpts.ariaLabel) {
          st.setAttribute("aria-label", statusOpts.ariaLabel);
          st.setAttribute("role", "status");
        } else {
          st.removeAttribute("aria-label");
        }
        if (row) row.classList.toggle("status-row--dots-only", dotsOnly && loading);
      } else {
        tx.textContent = message;
      }
      setStatusLoading(loading);
    }

    function hideStatus() {
      const st = $("statusSection");
      st.classList.add("hidden");
      $("statusText").textContent = "";
      $("statusText").style.color = "";
      if (variant === "popup") {
        st.removeAttribute("aria-label");
        const row = $("statusRow");
        if (row) row.classList.remove("status-row--dots-only");
      }
      setStatusLoading(false);
    }

    function showError(msg) {
      const st = $("statusSection");
      const tx = $("statusText");
      st.classList.remove("hidden");
      tx.textContent = msg;
      tx.style.color = "var(--danger)";
      if (variant === "popup") {
        st.removeAttribute("aria-label");
        const row = $("statusRow");
        if (row) row.classList.remove("status-row--dots-only");
      }
      setStatusLoading(false);
    }

    return { setStatusLoading, showStatus, hideStatus, showError };
  }

  g.StatusUi = { createStatusHelpers };
})(typeof self !== "undefined" ? self : globalThis);
