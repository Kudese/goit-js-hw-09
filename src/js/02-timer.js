import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    TimeRanges(selectedDates[0]);
  },
};

const elInputFild = document.querySelector('[id="datetime-picker"]');
const flatInput = flatpickr(elInputFild, options);
const elButtonStart = document.querySelector('[data-start]');
elButtonStart.disabled = true;

const elDataSecond = document.querySelector('[data-seconds]');
const elDataMinutes = document.querySelector('[data-minutes]');
const elDataHours = document.querySelector('[data-hours]');
const elDataDays = document.querySelector('[data-days]');
let timeDifference = '';
let dateSet;
let dateCurrent;
function TimeRanges(selectedDates) {
  dateCurrent = Date.now();
  dateSet = new Date(selectedDates);
  if (dateSet - dateCurrent < 0) {
    elButtonStart.disabled = true;
    alert('Please choose a date in the future');
  } else {
    timeDifference = addLeadingZero(convertMs(dateSet - dateCurrent));
    elButtonStart.disabled = false;
    console.log(timeDifference);
   
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  const stringSecond = `${seconds}`.padStart(2, 0);
  const stringMinutes = `${minutes}`.padStart(2, 0);
  const stringHours = `${hours}`.padStart(2, 0);
  const stringDays = `${days}`.padStart(2, 0);
  return { stringSecond, stringMinutes, stringHours, stringDays };
}

elButtonStart.addEventListener('click', startTimer);
let updateWatchFace;
function startTimer() {
  updateWatchFace = setInterval(name, 1000);
}

const name = function () {
  elDataSecond.textContent = timeDifference.stringSecond;
  elDataMinutes.textContent = timeDifference.stringMinutes;
  elDataHours.textContent = timeDifference.stringHours;
  elDataDays.textContent = timeDifference.stringDays;
  dateSet = dateSet - 1000;
  timeDifference = addLeadingZero(convertMs(dateSet - dateCurrent));
  if (dateSet - dateCurrent <= 0) {
    clearTimeout(updateWatchFace);
    elDataSecond.textContent = '00';
    elDataMinutes.textContent = '00';
    elDataHours.textContent = '00';
    elDataDays.textContent = '00';
    // console.log('Stop');
    return;
  }
}
