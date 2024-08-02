import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  easing: 'ease-out-quart',
})

import {
  headerSelector,
  handleClickMenuText,
  handleClickMenuList,
  handleClickHeaderBackdrop,
  handleClickModalMenuClose,
  handleScroll,
  handlerClickBtnTop,
} from './js/header.js';

import * as faq from './js/faq.js';
import * as reviews from './js/reviews.js';
import * as projects from './js/projects.js';
import * as footer from './js/footer.js';
import * as aboutme from './js/about-me.js';

// import {
//   swiper
// } from './js/projects.js';
