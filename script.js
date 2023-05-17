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
    title: 'Multi-Post Stories Gain+Glory',
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
    title: 'Multi-Post Stories Gain+Glory',
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
    title: 'Multi-Post Stories Gain+Glory',
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
    title: 'Multi-Post Stories Gain+Glory',
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
    title: 'Multi-Post Stories Gain+Glory',
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
    title: 'Multi-Post Stories Gain+Glory',
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