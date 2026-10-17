// Presentation only: no analytics, data collection, or assessment behavior.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.context, .steps article, .human, .faq, .early').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });
}
