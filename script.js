
const form = document.getElementById("consent-form");
const button = document.getElementById("download-button");
const status = document.getElementById("status");

function updateButton() {
  const checkboxes = [
    ...form.querySelectorAll('input[type="checkbox"]')
  ];

  const allChecked =
    checkboxes.length > 0 &&
    checkboxes.every((checkbox) => checkbox.checked);

  button.disabled = !allChecked;

  status.textContent = allChecked
    ? "Todas as confirmações foram marcadas. Podes continuar."
    : "Marque todas as caixas para continuar.";
}

form.addEventListener("change", updateButton);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Confere se todas as caixas obrigatórias foram marcadas.
  if (!form.reportValidity()) {
    return;
  }

  const checkboxes = [
    ...form.querySelectorAll('input[type="checkbox"]')
  ];

  if (
    checkboxes.length === 0 ||
    !checkboxes.every((checkbox) => checkbox.checked)
  ) {
    updateButton();
    return;
  }

  status.textContent = "Confirmações concluídas. Redirecionando...";

  window.location.href =
    "https://github.com/zylonkos/zylonkosiso";
});

// Sincroniza o botão e a mensagem ao carregar a página.
updateButton();
