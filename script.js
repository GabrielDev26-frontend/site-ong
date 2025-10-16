document.addEventListener('DOMContentLoaded', () => {
  // === MENU HAMBURGUER ===
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('ativo');
    });
  }

  // === MÁSCARAS DE CAMPOS ===
  const aplicarMascara = (input, mascaraFn) => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.value = mascaraFn(input.value);
    });
  };

  const cpfInput = document.getElementById('cpf');
  aplicarMascara(cpfInput, (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
  });

  const telefoneInput = document.getElementById('telefone');
  aplicarMascara(telefoneInput, (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
    return value;
  });

  const cepInput = document.getElementById('cep');
  aplicarMascara(cepInput, (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    return value;
  });

  // === VALIDAÇÃO DO FORMULÁRIO ===
  const form = document.querySelector('form');
  if (!form) return;

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

    if (cpf.length !== 14) {
      mostrarErro("⚠️ CPF inválido. Use o formato 000.000.000-00.");
      return;
    }

    if (!/^\d{5}-\d{3}$/.test(cep)) {
      mostrarErro("⚠️ CEP inválido. Use o formato 00000-000.");
      return;
    }

    if (telefone.length < 14) {
      mostrarErro("⚠️ Telefone inválido. Use o formato (00) 00000-0000.");
      return;
    }

    alert("✅ Cadastro enviado com sucesso! Obrigado por se cadastrar na ONG Acolhe Pet.");
    form.reset();
  });
});
