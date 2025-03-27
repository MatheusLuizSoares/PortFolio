document.addEventListener('DOMContentLoaded', function() {
  // Menu Hamburguer
  const menuHamburguer = document.querySelector('.menu-hamburguer');
  const nav = document.querySelector('.nav');

  menuHamburguer?.addEventListener('click', () => {
    menuHamburguer.classList.toggle('active');
    nav.classList.toggle('active');

    // Impede a rolagem quando o menu está aberto
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      menuHamburguer.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});
