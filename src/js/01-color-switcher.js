const elStartButton = document.querySelector('[data-start]');
const elStopButton = document.querySelector('[data-stop]');
const elBody = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
elStartButton.addEventListener('click', startChanhColor);
elStopButton.addEventListener('click', stopChanhColor);
let funSetinter;
elStopButton.disabled = true
function startChanhColor() {
  funSetinter = setInterval(() => {
    elBody.style.backgroundColor = getRandomHexColor();
    elStartButton.disabled = true
   elStopButton.disabled = false
  }, 1000);
}
function stopChanhColor() {
  clearInterval(funSetinter);
  elStartButton.disabled = false
  elStopButton.disabled = true
}
