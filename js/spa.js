const paginas = {
  inicio: "index.html",
  projetos: "projetos.html",
  cadastro: "cadastro.html",
  noticias: "noticias.html"
};

async function carregarPagina() {
  const hash = window.location.hash.replace("#/", "") || "inicio";
  const arquivo = paginas[hash] || paginas["inicio"];
  const conteudoMain = document.getElementById("conteudo");
  if (!conteudoMain) return;

  try {
    const resposta = await fetch(arquivo);
    if (!resposta.ok) throw new Error("Erro ao carregar página");
    const html = await resposta.text();
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const mainCarregado = tempDiv.querySelector("main");
    if (mainCarregado) {
      conteudoMain.innerHTML = mainCarregado.innerHTML;
    } else {
      conteudoMain.innerHTML = "<p>Página sem conteúdo principal.</p>";
    }

    interceptarLinks(); // reativa os links sempre que muda de página
  } catch (erro) {
    conteudoMain.innerHTML = "<p>Erro ao carregar a página.</p>";
  }
}

function interceptarLinks() {
  const links = document.querySelectorAll('a[href^="#/"]');
  links.forEach(link => {
    link.onclick = (e) => {
      e.preventDefault();
      window.location.hash = link.getAttribute("href");
    };
  });
}

window.addEventListener("hashchange", carregarPagina);
document.addEventListener("DOMContentLoaded", () => {
  interceptarLinks();
  carregarPagina();
});
