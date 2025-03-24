const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('change');
  nav.classList.toggle('active');
});