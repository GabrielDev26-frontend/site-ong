document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const conteudo = document.getElementById("conteudo"); // aqui vai o main

  async function carregarPagina(url) {
    try {
      const resposta = await fetch(url);
      if (!resposta.ok) throw new Error("Não deu pra carregar a página");
      const texto = await resposta.text();

      // criar um lugar temporário pra colocar o HTML da página
      const temp = document.createElement("div");
      temp.innerHTML = texto;

      // pegar só o main da página
      const novoMain = temp.querySelector("main");
      if (novoMain) {
        conteudo.innerHTML = novoMain.innerHTML;

        // ajeitar as imagens pra não quebrar
        const imgs = conteudo.querySelectorAll("img");
        imgs.forEach(img => {
          let src = img.getAttribute("src");
          if (!src.startsWith("http") && !src.startsWith("/")) {
            img.src = "/" + src.replace(/^\.?\//, "");
          }
        });
      } else {
        conteudo.innerHTML = "<p>Erro ao carregar o conteúdo</p>";
      }

      // atualizar o header (tipo a imagem hero e título)
      const novoHeader = temp.querySelector("header");
      if (novoHeader) {
        const headerAtual = document.querySelector("header");
        if (headerAtual) headerAtual.replaceWith(novoHeader);
      }

    } catch (erro) {
      console.error(erro);
      conteudo.innerHTML = "<p class='text-danger'>Erro ao carregar a página</p>";
    }
  }

  // clicar nos links do menu
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.getAttribute("href");
      carregarPagina(url);
      history.pushState(null, "", url);
    });
  });

  // voltar/avançar no navegador
  window.addEventListener("popstate", () => {
    const url = location.pathname.split("/").pop() || "index.html";
    carregarPagina(url);
  });

  // carregar a página inicial quando abrir o site
  carregarPagina("index.html");
});
