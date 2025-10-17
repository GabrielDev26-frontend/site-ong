document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('voltar-topo');
  if (!botao) return;

  botao.style.display = 'inline-block'; // sempre visível o botão

  botao.addEventListener('click', () => {
    // Rola a página inteira para o topo
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Para compatibilidade com alguns navegadores
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
