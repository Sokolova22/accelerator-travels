import Swiper from '../vendor/swiper';

let video = document.querySelector('.hero__video');
let slides = document.querySelectorAll('.hero__slide');
let audio = document.querySelector('.hero__audio');

export const swiperHero = new Swiper('.hero__swiper', {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 0,
  simulateTouch: false,

  pagination: {
    el: '.swiper__pagination',
    type: 'bullets',
    clickable: true,
  },

  on: {
    slideChange() {
      slides.forEach((slide) => {
        if (slide.querySelector('.hero__video') &&
          slide.classList.contains('swiper-slide-active')) {
          // empty
        } else {
          video.pause();
        }
      });
    },
  },

});

swiperHero.on('slideChangeTransitionEnd', () => {
  slides.forEach((slide) => {
    if (slide.querySelector('.hero__audio') &&
      slide.classList.contains('swiper-slide-active')) {
      audio.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
    } else {
      audio.removeAttribute('src');
    }
  });
});


export const swiperTours = new Swiper('.tours__swiper', {

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },


  navigation: {
    nextEl: '.tours__swiper-button--next',
    prevEl: '.tours__swiper-button--prev',
    disabledClass: 'tours__swiper-button--disabled',
  },
});

export const swiperTraining = new Swiper('.training__swiper', {


  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },


  navigation: {
    nextEl: '.training__swiper-button--next',
    prevEl: '.training__swiper-button--prev',
    disabledClass: 'training__swiper-button--disabled',
  },
});


export const swiperGallery = new Swiper('.gallery__swiper', {
  simulateTouch: true,

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 3,
    },

    768: {
      slidesPerView: 'auto',
      spaceBetween: 5,
    },

    1200: {
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
  },

  navigation: {
    nextEl: '.gallery__swiper-button--next',
    prevEl: '.gallery__swiper-button--prev',
    disabledClass: 'gallery__swiper-button--disabled',
  },

});

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = (className, settings) => {
      swiper = new Swiper(className, settings);
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else if (swiper) {
        swiper.destroy(true, true);
      }
      return '';
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  resizableSwiper(
    '(min-width: 1200px)',
    '.advantages__swiper',
    {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      initialSlide: 1,

      navigation: {
        nextEl: '.advantages__swiper-button--next',
        prevEl: '.advantages__swiper-button--prev',
      },
    }
  );


});

export const swiperFeedback = new Swiper('.feedback__swiper', {
  // autoHeight: true,
  simulateTouch: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },


  navigation: {
    nextEl: '.feedback__swiper-button--next',
    prevEl: '.feedback__swiper-button--prev',
    disabledClass: 'feedback__swiper-button--disabled',
  },
});
