const $button = document.getElementById("myButton");

$button.addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  $button.insertAdjacentElement("afterend", newElement);
});
