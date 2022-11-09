const elSbmitForm = document.querySelector('[type="submit"]');
const elDelayInput = document.querySelector('[name="delay"]');
const elStepInput = document.querySelector('[name="step"]');
const elAmountInput = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  const p = new Promise((resolve, reject)=>{
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    
  } else {
    // Reject
  }}
}
