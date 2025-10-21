document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const conteudo = document.getElementById("conteudo");

  async function carregarPagina(url) {
    const resposta = await fetch(url);
    const texto = await resposta.text();

    // Cria um elemento temporário para extrair só o conteúdo da <main>
    const temp = document.createElement("div");
    temp.innerHTML = texto;

    const novoConteudo = temp.querySelector("main");
    conteudo.innerHTML = novoConteudo ? novoConteudo.innerHTML : "Erro ao carregar conteúdo.";
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = e.target.getAttribute("href");
      carregarPagina(url);
    });
  });
});
