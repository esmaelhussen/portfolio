const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const menuLinks = mobileMenu.querySelectorAll('ul li a');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-d');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove('active'));

      const currentLink = document.querySelector(
        `a[href="#${entry.target.id}"]`
      );
      if (currentLink) {
        currentLink.classList.add('active');
      }
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));
