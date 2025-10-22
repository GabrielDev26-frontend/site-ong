document.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudo");

  function carregarPagina() {
    let caminho = window.location.hash || "#/inicio";
    let pagina = caminho.replace("#/", "");

    // Limpa o conteúdo antigo
    conteudo.innerHTML = "";

    if (pagina === "inicio") {
      
      conteudo.innerHTML = `
        <section class="container my-5">
          <h2 class="text-center fw-semibold">Seja bem-vindo!</h2>          
        </section>
      `;
      return;
    }

    // Outras páginas
    let arquivo = pagina + ".html";

    fetch(arquivo)
      .then(res => {
        if (!res.ok) throw new Error("Página não encontrada");
        return res.text();
      })
      .then(html => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        // Pega apenas o conteúdo da página (sem header nem body)
        const mainConteudo = tempDiv.querySelector("section") || tempDiv;
        conteudo.appendChild(mainConteudo);
      })
      .catch(err => {
        console.error(err);
        conteudo.innerHTML = "<h2 class='text-center text-danger'>Ops! Página não encontrada.</h2>";
      });
  }

  window.addEventListener("hashchange", carregarPagina);
  carregarPagina();
});
