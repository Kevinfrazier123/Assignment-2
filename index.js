
(function () {
  // Collect references
  const buttons = Array.from(document.querySelectorAll(".subject-card"));
  const lists = {
    math: document.getElementById("math-topics"),
    science: document.getElementById("science-topics"),
    history: document.getElementById("history-topics"),
  };

  // Utility — collapse all topic lists
  function collapseAll() {
    Object.values(lists).forEach((ul) => ul.classList.remove("show"));
    buttons.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
  }

  // Toggle a given subject’s list; close others to keep it clean
  function toggleSubject(subject) {
    const list = lists[subject];
    const btn = document.querySelector(`.subject-card[data-subject="${subject}"]`);
    const willShow = !list.classList.contains("show");

    collapseAll(); // close all first
    if (willShow) {
      list.classList.add("show");
      btn.setAttribute("aria-expanded", "true");
      // Optional: scroll the opened list into view on mobile
      list.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  // Wire up clicks
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const subject = btn.dataset.subject; // "math" | "science" | "history"
      toggleSubject(subject);
    });
    // Allow Enter/Space via native button semantics (no extra code needed)
  });

  // On load, ensure homepage is reset to top-level subjects only
  document.addEventListener("DOMContentLoaded", collapseAll);

  // If you ever want to auto-open a section (e.g., ?open=math), support it here:
  const params = new URLSearchParams(location.search);
  const openParam = params.get("open");
  if (openParam && lists[openParam]) {
    toggleSubject(openParam);
  }
})();
