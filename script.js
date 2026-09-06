(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if (revealEls.length === 0) return;

  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    },
    { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
  );

  revealEls.forEach((el) => io.observe(el));
})();
/* Mobile navigation toggle */
(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  const setOpen = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!header.classList.contains("is-open"));
  });

  // Close the menu when a link is chosen
  header.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) setOpen(false);
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();
