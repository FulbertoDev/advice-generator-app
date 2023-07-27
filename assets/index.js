const adviceId = document.querySelector("#advice-id");
const adviceQuote = document.querySelector("#advice-quote-text");
const actionButton = document.querySelector("#action-button");
const dice = document.querySelector("#dice");

function generateAdvice() {
  dice.classList.add('animate-spin')
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      const id = data.id;
      const text = data.advice;

      adviceId.innerHTML = `advice # ${id}`;
      adviceQuote.innerHTML = text;
      dice.classList.remove('animate-spin')
    });
}

generateAdvice();

actionButton.addEventListener('click', () => {
  generateAdvice();
});