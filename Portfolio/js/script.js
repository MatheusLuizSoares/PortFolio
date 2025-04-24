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

// Funções para expandir os projetos
document.querySelectorAll('.btn-details').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const expanded = this.closest('.portfolio-box').querySelector('.portfolio-expanded');
    expanded.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Fechar a janela expandida
document.querySelectorAll('.close-expanded').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.portfolio-expanded').classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Fechar ao clicar fora do conteúdo
document.querySelectorAll('.portfolio-expanded').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});