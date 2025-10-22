function carregarPagina() {
  let caminho = window.location.hash || "#/inicio";
  let pagina = caminho.replace("#/", "");

  // Se for a home, não carrega nada (usa o conteúdo do index)
  if (pagina === "inicio") return;

  let arquivo = pagina + ".html";

  fetch(arquivo)
    .then(res => {
      if (!res.ok) throw new Error("Página não encontrada");
      return res.text();
    })
    .then(html => {
      document.getElementById("conteudo").innerHTML = html;
      corrigirImagens();
    })
    .catch(() => {
      document.getElementById("conteudo").innerHTML =
        "<h2>Ops! Página não encontrada.</h2>";
    });
}
