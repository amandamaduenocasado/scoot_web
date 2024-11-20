
const burgericonEl = document.getElementById('burger-icon');
const menuEl = document.getElementById('menu');
const accordionEl = document.getElementById('accordion');
const textFaqEl = document.getElementById('text-faq')

/*menu*/

const toggleMenu = () => {
  menuEl.classList.toggle('menu-show');
  document.body.classList.toggle('showing-menu')

  if (menuEl.classList.contains('menu-show')) {
    burgericonEl.src = './assets/icons/close.svg';
  } else {
    burgericonEl.src = './assets/icons/hamburger.svg';
  }
};

burgericonEl.addEventListener('click', toggleMenu);

/*accordion*/

const showText = (event) => {
  event.target.childen[1].classList.toggle("accordion-show");
};

accordionEl.addEventListener('click', showText);
