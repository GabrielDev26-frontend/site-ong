// === BOTÃO VOLTAR AO TOPO ===
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('voltar-topo');

  // Mostrar/esconder o botão ao rolar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      botao.style.display = 'block';
    } else {
      botao.style.display = 'none';
    }
  });

  // Rolagem suave ao topo
  botao.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
