export const headerSelector = {
  menuText: document.querySelector('.header-menu-text'),
  menuList: document.querySelector('.header-menu-list'),
  btnMob: document.querySelector('.header-btn-mob'),
  headerBackdrop: document.querySelector('.header-backdrop'),
  headerModalClose: document.querySelector('.header-modal-menu-close'),
  headerModalMenu: document.querySelector('.header-modal-menu'),
  btnTop: document.querySelector('.go-to-top'),
};

headerSelector.menuText.addEventListener('click', handleClickMenuText);
export function handleClickMenuText() {
  //виклик списка меню
  headerSelector.menuList.classList.contains('is-open') //перевірка на наявність класа в контейнері
    ? headerSelector.menuList.classList.remove('is-open')
    : headerSelector.menuList.classList.add('is-open');
}

headerSelector.menuList.addEventListener('click', handleClickMenuList);

export function handleClickMenuList(event) {
  if (PointerEvent) {
    headerSelector.menuList.classList.remove('is-open');
  }
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

//btn to top//
headerSelector.btnTop.addEventListener('click', handlerClickBtnTop);
window.addEventListener('scroll', handleScroll);

export function handleScroll() {
  const offset = window.scrollY;
  const coords = document.documentElement.clientHeight;
  if (coords < offset) {
    headerSelector.btnTop.classList.add('is-open');
  } else {
    headerSelector.btnTop.classList.remove('is-open');
  }
}

export function handlerClickBtnTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
