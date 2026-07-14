const revealElements = document.querySelectorAll(`
  .section,
  .theme-card,
  .skill-card,
  .price-card,
  .timeline-list article
`);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px 100px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {
  const closeMobileMenu = () => {
    menuToggle.classList.remove("is-open");
    mobileNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.classList.toggle("is-open", !isOpen);
    mobileNav.classList.toggle("is-open", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu"
    );
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  });
}
