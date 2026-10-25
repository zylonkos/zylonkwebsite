const form = document.getElementById("consent-form");
    const button = document.getElementById("download-button");
    const status = document.getElementById("status");

    function updateButton() {
      const allChecked = [...form.querySelectorAll('input[type="checkbox"]')]
        .every((checkbox) => checkbox.checked);
      button.disabled = !allChecked;
      status.textContent = allChecked
        ? "Todas as confirmações foram marcadas. Podes continuar."
        : "Marque todas as caixas para continuar.";
    }

    form.addEventListener("change", updateButton);
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

      window.location.href = "https://github.com/zylonkos/zylonkosiso";
      status.textContent = "Consentimento confirmado. Configure aqui o endereço real do download.";
    });