const buttons = document.querySelectorAll(".btn-compartilhar");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert(`Você escolheu: ${button.textContent}`);
  });
});