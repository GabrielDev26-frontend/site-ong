document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('voltar-topo');
  if (!botao) return;

  // Sempre mostrar o botão (não depende do scroll)
  botao.style.display = 'block';

  // Rolagem suave ao topo
  botao.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
