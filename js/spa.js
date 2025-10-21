document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const conteudo = document.getElementById("conteudo");

  
  function ajustarImagens(container) {
    const imgs = container.querySelectorAll("img");
    imgs.forEach(img => {
      const srcOriginal = img.getAttribute("src");

      
      if (!srcOriginal.startsWith("http") && !srcOriginal.startsWith("/")) {
        
        img.src = `/site-ong/${srcOriginal.replace(/^\.?\//, "")}`;
      }
    });
  }

  async function carregarPagina(url) {
    try {
      const resposta = await fetch(url);
      if (!resposta.ok) throw new Error("Erro ao carregar a página");
      const texto = await resposta.text();

      // Extrai só o conteúdo do <main>
      const temp = document.createElement("div");
      temp.innerHTML = texto;
      const novoConteudo = temp.querySelector("main");

      if (novoConteudo) {
        conteudo.innerHTML = novoConteudo.innerHTML;
        ajustarImagens(conteudo); 
      } else {
        conteudo.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
      }
    } catch (erro) {
      console.error(erro);
      conteudo.innerHTML = "<p class='text-danger'>Erro ao carregar conteúdo.</p>";
    }
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = e.target.getAttribute("href");
      carregarPagina(url);
      // Atualiza a URL no navegador sem recarregar
      history.pushState(null, "", url);
    });
  });

  // Permite voltar/avançar com o botão do navegador
  window.addEventListener("popstate", () => {
    const url = location.pathname.split("/").pop();
    carregarPagina(url || "index.html");
  });
});
