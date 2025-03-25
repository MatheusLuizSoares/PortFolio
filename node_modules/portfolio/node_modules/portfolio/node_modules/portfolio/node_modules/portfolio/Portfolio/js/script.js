const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav');

// Menu Hamburguer
menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('change');
  nav.classList.toggle('active');
});

// Envio do Formulário
document.getElementById("contato").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: e.target.nome.value,
        email: e.target.email.value,
        telefone: e.target.telefone.value,
        assunto: e.target.assunto.value,
        mensagem: e.target.mensagem.value
      })
    });

    const result = await response.json();
    
    if (result.success) {
      alert('Mensagem enviada com sucesso!');
      e.target.reset(); // Limpa o formulário
    } else {
      throw new Error(result.error || 'Erro desconhecido');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Falha no envio. Tente novamente mais tarde.');
  }
});