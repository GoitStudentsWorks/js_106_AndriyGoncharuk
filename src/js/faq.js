import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.ac-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const parent = this.closest('.faq-item');
      const panel = parent.querySelector('.ac-panel');
      const icon = parent.querySelector('.icon-answer use');

      if (parent.classList.contains('is-active')) {
        parent.classList.remove('is-active');
        panel.style.height = '0';
        icon.setAttribute('href', '../img/icons.svg#icon-arrow-down');
      } else {
        parent.classList.add('is-active');
        panel.style.height = panel.scrollHeight + 'px';
        icon.setAttribute('href', '../img/icons.svg#icon-arrow-up');
      }
    });
  });
});
