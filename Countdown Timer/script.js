const newYears = "1 Jan 2023";

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function countdownTimer() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.ceil(totalSeconds / 3600 / 24);
  const hours = Math.ceil(totalSeconds / 3600) % 24;
  const minutes = Math.ceil(totalSeconds / 60) % 60;
  const seconds = Math.ceil(totalSeconds) % 60;

  daysElement.innerHTML = formatTime(days);
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

countdownTimer();

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdownTimer, 1000);
