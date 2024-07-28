import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';


const swiper = new Swiper(".projects-swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
});
    