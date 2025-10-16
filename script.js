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

cpfInput.addEventListener('input', () => {
  let value = cpfInput.value.replace(/\D/g, ''); // remove tudo que não é número
  if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  cpfInput.value = value;
});

  const telefoneInput = document.getElementById('telefone');
  aplicarMascara(telefoneInput, (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
    return value;
  });

 const cepInput = document.getElementById('cep');

cepInput.addEventListener('input', () => {
  let value = cepInput.value.replace(/\D/g, ''); // Remove tudo que não é número
  if (value.length > 8) value = value.slice(0, 8); // Limita a 8 dígitos
  value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Aplica o traço
  cepInput.value = value;
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

    if (cpf.replace(/\D/g, '').length !== 11) {
  mostrarErro("⚠️ CPF inválido. Digite 11 números (ex: 000.000.000-00).");
  return;
}

    if (cep.replace(/\D/g, '').length !== 8) {
  mostrarErro("⚠️ CEP inválido. Digite 8 números (ex: 00000-000).");
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
