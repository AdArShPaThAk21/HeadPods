document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  if (navToggle) {
      navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
      });
  }

  if (navClose) {
      navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
      });
  }

  window.addEventListener('resize', () => {
      if (window.innerWidth >= 1100) {
          if (navMenu.classList.contains('show-menu')) {
              navMenu.classList.remove('show-menu');
          }
      }
  });
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)