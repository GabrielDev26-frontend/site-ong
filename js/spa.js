window.addEventListener("hashchange", carregarPagina);
window.addEventListener("load", carregarPagina);

function carregarPagina() {
  let caminho = window.location.hash || "#/inicio"; // muda o padrão pra /inicio
  let pagina = caminho.replace("#/", "");
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

function corrigirImagens() {
  const imgs = document.querySelectorAll("#conteudo img");
  imgs.forEach(img => {
    const src = img.getAttribute("src");
    if (src && !src.startsWith("imagens/") && !src.startsWith("http")) {
      img.src = "imagens/" + src;
    }
  });
}
