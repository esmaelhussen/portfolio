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
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'assets/pictures/Snapshoot Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: '#',
    sourceLink: '#',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A project that enables users to create multiple posts easily.',
    featuredImage: 'assets/pictures/Snapshoot Portfolio000.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: '#',
    sourceLink: '#',
  },
  {
    name: 'Tonic',
    description: 'An interactive platform for daily personalized reads.',
    featuredImage: 'assets/pictures/Snapshoot Portfolio (1).svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: '#',
    sourceLink: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A tool for users to share multiple posts seamlessly.',
    featuredImage: 'assets/pictures/Snapshoot Portfolio (2).svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: '#',
    sourceLink: '#',
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
              <button type="button" class="links"> See Live <a href="${project.liveVersion}" target="_blank"></a><img class="btn-image" src="assets/pictures/Icon-power.svg" alt="circle-button" /></button>

              <button type="button" class="links"> See Source <a href="${project.sourceLink}" target="_blank"></a><img class="btn-image" src="assets/pictures/github-white.svg" alt="circle-button" /></button>
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
