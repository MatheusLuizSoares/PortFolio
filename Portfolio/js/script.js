const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('change');
  nav.classList.toggle('active');
});


document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nome: e.target.nome.value,
      email: e.target.email.value,
      assunto: e.target.assunto.value,
      telefone: e.target.telefone.value,
      mensagem: e.target.mensagem.value,
    })
  });

  const result = await response.json();
  if (result.success) alert('E-mail enviado!');
});