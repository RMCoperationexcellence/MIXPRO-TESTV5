const leds = document.querySelectorAll(".led");
const redLabels = document.querySelectorAll(".red-label");
const blueLabels = document.querySelectorAll(".blue-label, .scale-label");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const dialog = document.getElementById("alarmDialog");
const tabs = document.querySelectorAll(".top-tabs .tab");
const modeButtons = document.querySelectorAll(".mode-stack button");

let tick = 0;

function padNumber(value, digits = 2) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function updateMockReadings() {
  tick += 1;
  leds.forEach((led, index) => {
    const value = Math.abs(Math.sin((tick + index * 13) / 18)) * (index === 4 ? 1.35 : 0.08);
    led.textContent = padNumber(value);
  });

  blueLabels.forEach((label, index) => {
    if (!label.textContent.includes("kg")) return;
    const pulse = Math.abs(Math.sin((tick + index) / 30)) < 0.08;
    label.style.filter = pulse ? "brightness(1.85)" : "";
  });

  redLabels.forEach((label, index) => {
    const pulse = Math.abs(Math.cos((tick + index) / 42)) < 0.04;
    label.style.filter = pulse ? "brightness(1.7)" : "";
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

startButton.addEventListener("click", () => {
  startButton.style.boxShadow = "0 0 16px #00ff63";
  stopButton.style.boxShadow = "";
});

stopButton.addEventListener("click", () => {
  stopButton.style.boxShadow = "0 0 16px #ff1d2f";
  startButton.style.boxShadow = "";
  if (dialog && typeof dialog.showModal === "function") {
    dialog.showModal();
  }
});

setInterval(updateMockReadings, 900);
updateMockReadings();
