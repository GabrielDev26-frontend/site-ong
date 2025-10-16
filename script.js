


// === VALIDAÇÃO DO FORMULÁRIO ===
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  const cpfInput = document.getElementById('cpf');
  const telefoneInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const cpf = cpfInput?.value.trim() || '';
    const telefone = telefoneInput?.value.trim() || '';
    const data = document.getElementById('data_nascimento')?.value || '';
    const endereco = document.getElementById('endereco')?.value.trim() || '';
    const cep = cepInput?.value.trim() || '';
    const cidade = document.getElementById('cidade')?.value.trim() || '';
    const estado = document.getElementById('estado')?.value || '';

    const mostrarErro = (msg) => alert(msg);

    if (!nome || !email || !cpf || !telefone || !data || !endereco || !cep || !cidade || !estado) {
      mostrarErro("⚠️ Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      mostrarErro("⚠️ E-mail inválido. Use o formato nome@dominio.com.");
      return;
    }

    if (cpf.replace(/\D/g, '').length !== 11) {
      mostrarErro("⚠️ CPF inválido. Digite 11 números (ex: 000.000.000-00).");
      return;
    }

    if (cep.replace(/\D/g, '').length !== 8) {
      mostrarErro("⚠️ CEP inválido. Digite 8 números (ex: 00000-000).");
      return;
    }

    if (telefone.replace(/\D/g, '').length < 11) {
      mostrarErro("⚠️ Telefone inválido. Use o formato (00) 00000-0000.");
      return;
    }

    alert("✅ Cadastro enviado com sucesso! Obrigado por se cadastrar na ONG Acolhe Pet.");
    form.reset();
  });
});
