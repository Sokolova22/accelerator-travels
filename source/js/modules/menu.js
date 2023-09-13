
let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let navList = document.querySelector('.nav__list');
let header = document.querySelector('.header');
let headerWrapper = document.querySelector('.header__wrapper');
let headerLogo = document.querySelector('.header__logo');

let body = document.querySelector('body');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onMenuEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseMenu();
  }
};

const onCloseMenu = () => {
  nav.classList.add('nav--is-invalid');
  nav.classList.remove('nav--is-active');
  header.classList.remove('modal__wrapper');
  headerWrapper.classList.add('header__wrapper--is-invalid');
  headerWrapper.classList.remove('header__wrapper--is-active');
  headerWrapper.classList.remove('modal', 'is-active');
  headerLogo.classList.add('header__logo--is-invalid');
  headerLogo.classList.remove('header__logo--is-active');
  body.classList.remove('scroll-lock');

  document.body.style.overflowY = 'visible';
  document.removeEventListener('keydown', onMenuEscKeydown);
};

const onOpenMenu = () => {
  nav.classList.remove('nav--is-invalid');
  nav.classList.add('nav--is-active');
  header.classList.add('modal__wrapper');
  headerWrapper.classList.remove('header__wrapper--is-invalid');
  headerWrapper.classList.add('header__wrapper--is-active');
  headerWrapper.classList.add('modal', 'is-active');
  headerLogo.classList.remove('header__logo--is-invalid');
  headerLogo.classList.add('header__logo--is-active');
  body.classList.add('scroll-lock');

  document.body.style.overflowY = 'hidden';
  document.addEventListener('keydown', onMenuEscKeydown);
};

navList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('nav__link')) {
    onCloseMenu();
  }

});


export const initMenu = () => {

  navToggle.addEventListener('click', function () {

    if (nav.classList.contains('nav--is-invalid')) {

      onOpenMenu();

    } else {
      onCloseMenu();

    }
  });

};
