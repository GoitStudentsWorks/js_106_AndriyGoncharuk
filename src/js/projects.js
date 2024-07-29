// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

document.addEventListener('DOMContentLoaded', function() {
    // Swiper: Slider
    const swiper = new Swiper('.projects-swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            1440: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
});

