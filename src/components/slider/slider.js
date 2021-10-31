import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss';
//import 'swiper/modules/pagination/pagination.scss';
//import 'swiper/modules/navigation/navigation.scss';

Swiper.use([Navigation, Pagination]);

export const Slider = () => {
  new Swiper('.slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1366: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
    },

  })
}
