
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a"); // links do menu
  const conteudo = document.getElementById("conteudo"); // onde vai carregar as páginas

  if (!conteudo) return;

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const pagina = link.getAttribute("href");

      fetch(pagina)
        .then(resp => {
          if (!resp.ok) throw new Error("Erro ao carregar página");
          return resp.text();
        })
        .then(html => {
          conteudo.innerHTML = html;
          window.scrollTo(0, 0); // volta pro topo
        })
        .catch(() => {
          conteudo.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
        });
    });
  });
});
