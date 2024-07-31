import Swiper from 'swiper';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


document.addEventListener('DOMContentLoaded', function () {
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
            }
        },
        on: {
            init: function() {
                updateNavigationButtons(this);
            },
            slideChange: function() {
                updateNavigationButtons(this);
            },
        }
    });
    function updateNavigationButtons(swiper) {
        const prevButton = document.querySelector('.projects-button-prev');
        const nextButton = document.querySelector('.projects-button-next');
        
        if (swiper.isBeginning) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        if (swiper.isEnd) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }
});



