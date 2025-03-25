const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('change');
  nav.classList.toggle('active');
});


document.getElementById("contato").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const response = await fetch("https://formsubmit.co/ajax/seu-email@gmail.com", {
    method: "POST",
    body: new FormData(e.target), // Envia todos os campos automaticamente
    headers: { 
      'Accept': 'application/json' 
    }
  });

  const result = await response.json();
  if (result.success) {
    alert("Mensagem enviada com sucesso!");
    e.target.reset(); // Limpa o formulário
  } else {
    alert("Erro ao enviar. Tente novamente.");
  }
});


emailjs.sendForm("service_azb3ov9", "template_33icqj9", e.target)
  .then(() => alert("Enviado!"))
  .catch(() => alert("Erro!"));