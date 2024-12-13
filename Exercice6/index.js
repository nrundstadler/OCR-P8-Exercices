let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = currentInput;
}

function calculateResult() {
  const $display = document.getElementById("display");

  // Vérifier que l'expression ne contient que des caractères valides (par sécurité)
  const validExpression = /^[0-9+*\-/]*$/;
  if (!validExpression.test(currentInput)) {
    $display.value = "";
    currentInput = "";
    return;
  }

  if (currentInput.includes("/0")) {
    $display.value = "Division by zero is not allowed";
    currentInput = "";
    return;
  }

  const result = eval(currentInput);
  $display.value = result;
  currentInput = result.toString();
}
