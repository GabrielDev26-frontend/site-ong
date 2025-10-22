document.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudo");

  function carregarPagina() {
    let caminho = window.location.hash || "#/inicio";
    let pagina = caminho.replace("#/", "");

    if (pagina === "inicio") {
      // Home: mantém o conteúdo do header fixo
      conteudo.innerHTML = `
        <section class="container my-5">
          <h2 class="text-center fw-semibold">Seja bem-vindo!</h2>
          <p class="text-center">Explore nossos projetos e notícias sobre animais.</p>
        </section>
      `;
      return;
    }

    let arquivo = pagina + ".html";

    fetch(arquivo)
      .then(res => {
        if (!res.ok) throw new Error("Página não encontrada");
        return res.text();
      })
      .then(html => {
        // Cria uma div temporária para manipular o HTML
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        // Pega apenas o conteúdo dentro de <main>
        const mainDaPagina = tempDiv.querySelector("main");
        if (mainDaPagina) {
          conteudo.innerHTML = mainDaPagina.innerHTML;
        } else {
          conteudo.innerHTML = "<p class='text-center text-danger'>Conteúdo não encontrado.</p>";
        }
      })
      .catch(err => {
        console.error(err);
        conteudo.innerHTML = "<h2 class='text-center text-danger'>Ops! Página não encontrada.</h2>";
      });
  }

  window.addEventListener("hashchange", carregarPagina);
  carregarPagina();
});
