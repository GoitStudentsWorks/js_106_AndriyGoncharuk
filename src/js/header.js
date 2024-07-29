export const headerSelector = {
  menuText: document.querySelector('.header-menu-text'),
  menuList: document.querySelector('.header-menu-list'),
  btnMob: document.querySelector('.header-btn-mob'),
  headerBackdrop: document.querySelector('.header-backdrop'),
  headerModalClose: document.querySelector('.header-modal-menu-close'),
  headerModalMenu: document.querySelector('.header-modal-menu'),
};

headerSelector.menuText.addEventListener('click', handleClickMenuText);
export function handleClickMenuText() {
  //виклик списка меню
  headerSelector.menuList.classList.contains('is-open') //перевірка на наявність класа в контейнері
    ? headerSelector.menuList.classList.remove('is-open')
    : headerSelector.menuList.classList.add('is-open');
}
headerSelector.btnMob.addEventListener('click', handleClickHeaderBackdrop);
headerSelector.headerModalMenu.addEventListener(
  'click',
  handleClickModalMenuClose
);

export function handleClickHeaderBackdrop() {
  // додавання класу для відображення модалки
  headerSelector.headerBackdrop.classList.add('is-open');
}

export function handleClickModalMenuClose(event) {
  // якщо натискаємо по пустому полі то нічого не робиться, все інше закриває модалку
  if (event.target.nodeName !== 'DIV') {
    headerSelector.headerBackdrop.classList.remove('is-open');
  }
}
