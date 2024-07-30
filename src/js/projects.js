import Swiper from 'swiper';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


document.addEventListener('DOMContentLoaded', function() {
    // Swiper: Slider
    const swiper = new Swiper('.projects-swiper-container', {
        modules: [Navigation, Autoplay, Keyboard],
        loop: false,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.projects-button-next',
            prevEl: '.projects-button-prev'
        },
        autoplay: {
            delay: 3000,
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
<<<<<<< Updated upstream
=======
            }
        }
    });
    swiper.slideNext();
});
>>>>>>> Stashed changes


