const revealElements = document.querySelectorAll(`
  .section,
  .theme-card,
  .skill-card,
  .price-card,
  .timeline-list article
`);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
