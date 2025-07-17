// Smooth scroll spy and toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.nav-list');

  // Mobile nav toggle
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  navLinks.forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });

  // Scroll-spy
  const activateNav = () => {
    let index = sections.length;
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  };
  activateNav();
  window.addEventListener('scroll', activateNav);

  // IntersectionObserver for animations
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
});
