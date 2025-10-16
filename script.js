// === Validação do Formulário de Cadastro - ONG Acolhe Pet ===

// Seleciona o formulário
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio automático

  // Captura os valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const data = document.getElementById("data_nascimento").value;
  const endereco = document.getElementById("endereco").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value;

  // Função auxiliar para exibir mensagens de erro
  function mostrarErro(mensagem) {
    alert(mensagem);
  }

  // === Validações ===

  // Campos obrigatórios
  if (
    nome === "" ||
    email === "" ||
    cpf === "" ||
    telefone === "" ||
    data === "" ||
    endereco === "" ||
    cep === "" ||
    cidade === "" ||
    estado === ""
  ) {
    mostrarErro("⚠️ Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // E-mail
  if (!email.includes("@") || !email.includes(".")) {
    mostrarErro("⚠️ E-mail inválido. Use um formato válido, ex: nome@dominio.com.");
    return;
  }

  // CPF
  if (cpf.length !== 14) {
    mostrarErro("⚠️ CPF inválido. Use o formato 000.000.000-00.");
    return;
  }

  // CEP
  if (!/^\d{5}-\d{3}$/.test(cep)) {
    mostrarErro("⚠️ CEP inválido. Use o formato 00000-000.");
    return;
  }

  // Telefone
  if (telefone.length < 14) {
    mostrarErro("⚠️ Telefone inválido. Use o formato (00) 00000-0000.");
    return;
  }

  // Se passou por todas as validações:
  alert("✅ Cadastro enviado com sucesso! Obrigado por se cadastrar na ONG Acolhe Pet.");
  form.reset(); // Limpa os campos do formulário
});
