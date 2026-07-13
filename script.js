const revealElements = document.querySelectorAll(`
  .section,
  .theme-card,
  .skill-card,
  .price-card,
  .timeline-list article,
  .activation-grid article,
  .purpose-steps article
`);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px"
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});
