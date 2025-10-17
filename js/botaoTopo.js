document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('voltar-topo');
  if (!botao) return;

  // Inicializa visibilidade
  const toggleBotao = () => {
    botao.style.display = window.scrollY > 100 ? 'block' : 'none';
  };

  toggleBotao(); // chama ao carregar

  // Ao rolar
  window.addEventListener('scroll', toggleBotao);

  // Ao clicar, rolagem suave
  botao.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
