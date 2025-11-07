// Parallax effect for hero background
window.addEventListener('scroll', function() {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    let scrollY = window.scrollY;
    heroBg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.05)`;
  }
});

// Card fade-in on scroll
const cards = document.querySelectorAll('.hover-card, .award-card, .gallery-card');
const fadeInOnScroll = () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      card.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Accessibility: Add focus style to cards
cards.forEach(card => {
  card.setAttribute('tabindex', '0');
  card.addEventListener('focus', () => card.classList.add('hovered'));
  card.addEventListener('blur', () => card.classList.remove('hovered'));
});

// Optional: Load fixtures and top scorers from CSV/JSON for dynamic updates
// (Implementation depends on data format and hosting setup)
