// === MÁSCARAS DE CAMPOS ===
document.addEventListener('DOMContentLoaded', () => {
  const aplicarMascara = (input, mascaraFn) => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.value = mascaraFn(input.value);
    });
  };

  // CPF
  const cpfInput = document.getElementById('cpf');
  if (cpfInput) {
    cpfInput.addEventListener('input', () => {
      let value = cpfInput.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      cpfInput.value = value;
    });
  }

  // Telefone
  const telefoneInput = document.getElementById('telefone');
  aplicarMascara(telefoneInput, (value) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
    return value;
  });

  // CEP
  const cepInput = document.getElementById('cep');
  if (cepInput) {
    cepInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 8) value = value.slice(0, 8);
      if (value.length > 5) value = value.replace(/^(\d{5})(\d{1,3})/, '$1-$2');
      e.target.value = value;
    });
  }
});