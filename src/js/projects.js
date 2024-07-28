// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.min.css';


const swiper = new Swiper(".projects-swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
});
    