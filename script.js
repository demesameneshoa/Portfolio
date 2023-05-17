const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.mob-nav-menu');
const myWorks = document.querySelector('.myworks-wrapper');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const myWorksdetail = [
  {
    id: 0,
    url: './images/placeholder.png',
    alt: 'Project preview image',
    title: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      opt1: 'Ruby on Rails',
      opt2: 'CSS',
      opt3: 'JavaScript',
      opt4: 'HTML',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 1,
    url: './images/placeholder.png',
    alt: 'Project preview image',
    title: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      opt1: 'Ruby on Rails',
      opt2: 'CSS',
      opt3: 'JavaScript',
      opt4: 'HTML',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 2,
    url: './images/placeholder.png',
    alt: 'Project preview image',
    title: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      opt1: 'Ruby on Rails',
      opt2: 'CSS',
      opt3: 'JavaScript',
      opt4: 'HTML',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 3,
    url: './images/placeholder.png',
    alt: 'Project preview image',
    title: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      opt1: 'Ruby on Rails',
      opt2: 'CSS',
      opt3: 'JavaScript',
      opt4: 'HTML',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 4,
    url: './images/placeholder.png',
    alt: 'Project preview image',
    title: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      opt1: 'Ruby on Rails',
      opt2: 'CSS',
      opt3: 'JavaScript',
      opt4: 'HTML',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 5,
    url: './images/placeholder.png',
    alt: 'Project preview image',
    title: 'Keeping track of hundreds of components',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      opt1: 'Ruby on Rails',
      opt2: 'CSS',
      opt3: 'JavaScript',
      opt4: 'HTML',
    },
    linkVersion: '#',
    linkSource: '#',
  },
];

function createMyWorksList(myWorksdetail) {
  const myWorksList = `
      <div class="myworks-card">
        <div class="myworks-thumbnail">
        <img alt>
        <h3 class="work-title">${myWorksdetail.title}</h3>
        <ul class="work-languages" >
          <li>${myWorksdetail.tecnologies.opt1}</li>
          <li>${myWorksdetail.tecnologies.opt2}</li>
          <li>${myWorksdetail.tecnologies.opt3}</li>
          <li>${myWorksdetail.tecnologies.opt4}</li>
        </ul>
        <button type="button" class="pop-up"> See Project</button>
        </div>
      </div>`;
  return myWorksList;
}

for (let i = 0; i < myWorksdetail.length; i += 1) {
  const work = createMyWorksList(myWorksdetail[i]);
  myWorks.innerHTML += work;
}

const popupDiv = (index) => `

 <section class="popup-detail">
          <button type="button" class="icon btn-close-pop-up">
              <img class="icon" src="./images/icons/cancel-menu.svg" alt="cancel icon">
          </button>
          <div class="work-image-details">
          <img src=${myWorksdetail[index].url} alt ='${myWorksdetail[index].alt}'>
          </div>
          <h2 class="work-title-mobile">
              ${myWorksdetail[index].title}
          </h2>
          <ul class="work-tags-mobile">
              <li class="tag-mobile">${myWorksdetail[index].tecnologies.opt1}</li>
              <li class="tag-mobile">${myWorksdetail[index].tecnologies.opt2}</li>
              <li class="tag-mobile">${myWorksdetail[index].tecnologies.opt3}</li>
          </ul>
          <p class="work-discription-mobile">
        ${myWorksdetail[index].desc}
          </p>
          <div class="work-button-mobile">
                  <a href=${myWorksdetail[index].linkVersion} class="work-detail-btn-mobile">
                  See Live
                  <img src="./images/icons/showlive-icon.svg" class="icon" alt="live icon">
                  </a>
                  <a href=${myWorksdetail[index].linkSource} class="work-detail-btn-mobile">
                  See Sources
                  <img src="./images/icons/git-hub.svg" class="icon" alt="github icon">
                  </a>
          </div>
          <script src="java_script.js"></script>
  </section>

`;

const popupBtn = document.querySelectorAll('.pop-up');
for (let i = 0; i < popupBtn.length; i += 1) {
  popupBtn[i].addEventListener('click', () => {
    const myWork = document.createElement('div');
    myWork.classList.add('pop-up-bk');
    myWork.innerHTML = popupDiv(i);
    document.body.appendChild(myWork);
    const closePopupBtn = document.querySelector('.btn-close-pop-up');
    closePopupBtn.addEventListener('click', () => {
      document.body.removeChild(myWork);
    });
  });
}
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email-address').value;
  const errorMessage = document.querySelector('.form-response');

  if (email.toLowerCase() === email) {
    errorMessage.innerText = '';
    contactForm.submit();
  } else {
    errorMessage.innerText = 'Error: Email address must be in lowercase.';
  }
});