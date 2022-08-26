import Swiper from 'swiper/bundle';

class SectionContentCards extends HTMLElement {
  constructor() {
    super();
    this._initSlider()
  }

  /**
   * Swiper initialization
   * @private
   */
  _initSlider() {
    this.swiper = new Swiper(this.querySelector('.content-cards__swiper'), {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          navigation: {
            nextEl: '.button-next-cards',
            prevEl: '.button-prev-cards',
          }
        },
        768: {
          slidesPerView: 2.6,
          navigation: {
            nextEl: '.button-next-cards',
            prevEl: '.button-prev-cards',
          }
        },
        992: {
          slidesPerView: 4,
        }
      }
    })
  }
}

if (!customElements.get('section-content-cards')) {
  customElements.define('section-content-cards', SectionContentCards);
}