document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('voltar-topo');
  if (!botao) return;

  // Mostrar sempre o botão
  botao.style.display = 'inline-block';

  // Rolagem suave ao topo
  botao.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
