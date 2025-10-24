const btnTopo = document.getElementById('btnTopo');

// Mostrar/esconder botão
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

// Rolar para o topo
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
