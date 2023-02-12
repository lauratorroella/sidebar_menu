const burgerMenu = document.querySelector('.burger-menu');
const sidebarMenu = document.querySelector('.sidebar-menu');

burgerMenu.addEventListener('click', function() {
  sidebarMenu.classList.toggle('open');
});
