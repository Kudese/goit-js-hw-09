const elStartButton = document.querySelector('[data-start]');
const elStopButton = document.querySelector('[data-stop]');
const elBody = document.querySelector('body');

console.log(elBody);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
elStartButton.addEventListener('click', startChanhColor);
elStopButton.addEventListener('click', stopChanhColor);
let funSetinter;
function startChanhColor() {
  funSetinter = setInterval(() => {
    elBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function stopChanhColor() {
  clearInterval(funSetinter);
}
