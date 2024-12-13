function convertToBinary() {
  const $decimalInput = document.getElementById("decimalInput").value;

  // Vérification que l'entrée est un nombre entier
  if (isNaN($decimalInput) || $decimalInput.trim() === "" || !Number.isInteger(Number($decimalInput))) {
    displayResult("");
    return;
  }

  let decimalNumber = parseInt($decimalInput, 10);
  let binaryNumber = "";

  while (decimalNumber > 0) {
    const quotient = Math.floor(decimalNumber / 2); // Division entière
    const remainder = decimalNumber % 2; // Reste de la division

    binaryNumber = remainder + binaryNumber;

    decimalNumber = quotient; // On met à jour le nombre avec le quotient
  }

  displayResult(binaryNumber);
}

// Fonction utilitaire pour afficher le résultat
function displayResult(message) {
  const $resultElement = document.getElementById("binaryResult");
  $resultElement.textContent = message;
}
