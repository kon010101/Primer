const burgerOpen = () => {
  const burger = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.insideNav');
  const menuItems = document.querySelector('.mainNavUl');

  burger.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('insideNav-active');
    burger.classList.toggle('burger-active');
    menuItems.classList.toggle('mainNavUl-active');

  });

}

burgerOpen();
