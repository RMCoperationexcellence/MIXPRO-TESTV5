const leds = document.querySelectorAll(".led");
const redLabels = document.querySelectorAll(".red-label");
const blueLabels = document.querySelectorAll(".blue-label, .scale-label");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const dialog = document.getElementById("alarmDialog");
const tabs = document.querySelectorAll(".top-tabs .tab");
const modeButtons = document.querySelectorAll(".mode-stack button");
const plant = document.querySelector(".plant");
const themeToggle = document.getElementById("themeToggle");
const themeLabel = themeToggle?.querySelector(".theme-label");

let tick = 0;

function setTheme(theme) {
  const isLight = theme !== "dark";
  document.body.classList.toggle("theme-light", isLight);
  document.body.classList.toggle("theme-dark", !isLight);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(!isLight));
  }

  if (themeLabel) {
    themeLabel.textContent = isLight ? "Light" : "Dark";
  }

  try {
    localStorage.setItem("mixpro-theme", isLight ? "light" : "dark");
  } catch (error) {
    // Theme still changes even when storage is unavailable.
  }
}

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

if (startButton && stopButton && plant) {
  startButton.addEventListener("click", () => {
    plant.classList.add("running");
    startButton.style.boxShadow = "0 0 16px #00ff63";
    stopButton.style.boxShadow = "";
  });

  stopButton.addEventListener("click", () => {
    plant.classList.remove("running");
    stopButton.style.boxShadow = "0 0 16px #ff1d2f";
    startButton.style.boxShadow = "";
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
    }
  });
}

if (themeToggle) {
  let savedTheme = "light";

  try {
    savedTheme = localStorage.getItem("mixpro-theme") || "light";
  } catch (error) {
    savedTheme = "light";
  }

  setTheme(savedTheme || "light");

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("theme-light") ? "dark" : "light";
    setTheme(nextTheme);
  });
}

setInterval(updateMockReadings, 900);
updateMockReadings();
