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
