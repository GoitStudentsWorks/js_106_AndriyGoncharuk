import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    duration: 300,
    elementClass: 'faq-item',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
    beforeOpen: item => {
      const icon = item.querySelector('.icon-answer use');
      icon.setAttribute('href', './img/icons.svg#icon-arrow-up');
    },
    beforeClose: item => {
      const icon = item.querySelector('.icon-answer use');
      icon.setAttribute('href', './img/icons.svg#icon-arrow-down');
    },
  });
});
