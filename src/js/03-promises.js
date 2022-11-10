const elSbmitForm = document.querySelector('[type="submit"]');
const elForma = document.querySelector('.form');
const elDelayInput = elForma.querySelector('[name="delay"]');
const elStepInput = elForma.querySelector('[name="step"]');
const elAmountInput = elForma.querySelector('[name="amount"]');

function createPromise(position, delay) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
 return p
}

elForma.addEventListener('submit', startPromis);

function startPromis(e) {
  e.preventDefault();
  let delay =Number(elDelayInput.value);
  let step = Number(elStepInput.value);
  let amount = Number(elAmountInput.value);
  for (let i = 0; i < amount; i++) {
    createPromise(1 + i, delay + i * step)
      .then(({position, delay})=>{
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch((({position, delay}) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      }));
  }
}
