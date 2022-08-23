import Swiper from 'swiper/bundle';

class SectionContentCards extends HTMLElement {
  constructor() {
    super();
    this.initSlider()
  }
  initSlider() {
    this.swiper = new Swiper(this.querySelector('.content-cards__swiper'), {
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
      },
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        }
      }
    })
  }
}

if (!customElements.get('section-content-cards')) {
  customElements.define('section-content-cards', SectionContentCards);
}