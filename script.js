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

const projects = [
  {
    name: 'Adult-tech-solution',
    description:
      'Adult-Tech-Solution is an idea of empowering of learned and experienced Adults in different sectors to make them experienced on work environment and to live happy life.',
    featuredImage: 'assets/pictures/Snapshoot Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://esmaelhussen.github.io/Adult-tech-solution/',
    sourceLink: 'https://github.com/esmaelhussen/Adult-tech-solution',
  },
  {
    name: 'Awesome-book',
    description:
      'A basic website that allows users to add/remove books from a list.',
    featuredImage: 'assets/pictures/Snapshoot Portfolio000.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://esmaelhussen.github.io/Awesome-book/',
    sourceLink: 'https://github.com/esmaelhussen/Awesome-book',
  },
  {
    name: 'To do list',
    description:
      'To do list is a tool designed to help you organize your daily tasks. It presents a list of activities you need to complete and gives you the ability to mark them as done. You will create a straightforward website to implement this functionality, using ES6 and Webpack!',
    featuredImage: 'assets/pictures/Snapshoot Portfolio (1).svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://esmaelhussen.github.io/To-do-list/',
    sourceLink: 'https://github.com/esmaelhussen/To-do-list',
  },
  {
    name: 'Alpha-Calculator',
    description:
      'Alpha calculator is simple arthimetic calculator developed by HTML and CSS.',
    featuredImage: 'assets/pictures/Snapshoot Portfolio (2).svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://esmaelhussen.github.io/Alpha-Calculator/',
    sourceLink: 'https://github.com/esmaelhussen/Alpha-Calculator',
  },
];

function displayProjects() {
  const worksSection = document.querySelector('.works');
  worksSection.innerHTML = '';

  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.classList.add('cards');

    card.innerHTML = `
          <img class="snapshoot" src="${project.featuredImage}" alt="${
      project.name
    }" />
          <div>
              <h2 class="card-titles">${project.name}</h2>
              <div class="subheading-lists">
                  <span class="canopy">CANOPY</span>
                  <img src="assets/pictures/Counter.svg" alt="circle-button" />
                  <span class="subheading-list-title">Back End Dev</span>
                  <img src="assets/pictures/Counter.svg" alt="circle-button" />
                  <span class="subheading-list-title">2015</span>
              </div>
              <section class="card-content">
                  <p>${project.description}</p>
              </section>
              <ul class="webdev-languages">
                  ${project.technologies
                    .map((tech) => `<li class="lan">${tech}</li>`)
                    .join('')}
              </ul>
              <div class="see">
                  <button class="see-project" data-index="${index}">See Project</button>
              </div>
          </div>
      `;

    worksSection.appendChild(card);
  });
}

function showPopup(index) {
  const project = projects[index];
  const popup = document.createElement('div');
  popup.className = 'popup';

  popup.innerHTML = `
      <div class="popup-content">
          <span class="close-popup">&times;</span>
          <h2 class="card-titles">${project.name}</h2>
          <div class="subheading-lists">
                  <span class="canopy">CANOPY</span>
                  <img src="assets/pictures/Counter.svg" alt="circle-button" />
                  <span class="subheading-list-title">Back End Dev</span>
                  <img src="assets/pictures/Counter.svg" alt="circle-button" />
                  <span class="subheading-list-title">2015</span>
              </div>
          <img class="popup-image" src="${project.featuredImage}" alt="${project.name}" />
          <p class="card-content">${project.description}</p>
          <ul class="webdev-languages">
          <li class="lan">HTML</li>
          <li class="lan">CSS</li>
          <li class="lan">JavaScript</li>
        </ul>
          <div class="btns">
              <a href="${project.liveVersion}" target="_blank">
                <button type="button" class="links">See Live
                  <img class="btn-image" src="assets/pictures/Icon-power.svg" alt="circle-button" />
                </button>
              </a>
              <a href="${project.sourceLink}" target="_blank">
                <button type="button" class="links">See Source
                  <img class="btn-image" src="assets/pictures/github-white.svg" alt="circle-button" />
                </button>
              </a>
          </div>
      </div>
  `;

  document.body.appendChild(popup);

  popup.querySelector('.close-popup').onclick = () => {
    document.body.removeChild(popup);
  };
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('see-project')) {
    const index = event.target.getAttribute('data-index');
    showPopup(index);
  }
});

window.onload = displayProjects;

document.addEventListener('submit', function (event) {
  const emailInput = document.querySelector('.email');
  const errorMessage = document.getElementById('error-message');
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.textContent =
      'Email must be in lowercase. you can use now converted to lowercase just enter the button';
    errorMessage.style.display = 'block';
    emailInput.value = emailInput.value.toLowerCase();
  } else {
    errorMessage.style.display = 'none';
  }
});

const contactForm = document.getElementById('contactForm');
const names = document.querySelector('.name');
const emails = document.querySelector('.email');
const messages = document.querySelector('.message');
const saves = localStorage.getItem('contactFormData');
const resets = document.querySelector('.reset');
if (saves) {
  const formData = JSON.parse(saves);
  names.value = formData.name || '';
  emails.value = formData.email || '';
  messages.value = formData.message || '';
}
const savedata = () => {
  const formData = {
    name: names.value,
    email: emails.value,
    message: messages.value,
  };
  localStorage.setItem('contactFormData', JSON.stringify(formData));
};
const resetForm = () => {
  names.value = '';
  emails.value = '';
  messages.value = '';
  localStorage.removeItem('contactFormData');
};

names.addEventListener('input', savedata);
emails.addEventListener('input', savedata);
messages.addEventListener('input', savedata);
resets.addEventListener('click', resetForm);
