/* Coral Springs Barber Co. — tiny progressive-enhancement layer. No deps. */
(function () {
  "use strict";

  // Nav gets a border/solid bg once you scroll past the hero top.
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal-on-scroll. Falls back to "all visible" if IO is unsupported.
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Keep the copyright year honest.
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
