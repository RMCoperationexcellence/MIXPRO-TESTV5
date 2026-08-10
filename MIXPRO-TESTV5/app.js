const leds = document.querySelectorAll(".led");
const redLabels = document.querySelectorAll(".red-label");
const blueLabels = document.querySelectorAll(".blue-label, .scale-label");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const dialog = document.getElementById("alarmDialog");
const tabs = document.querySelectorAll(".top-tabs .tab");
const modeButtons = document.querySelectorAll(".mode-stack button");
const plant = document.querySelector(".plant");
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");

let tick = 0;
const THEME_STORAGE_KEY = "mixpro-theme";

function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The toggle still works when storage is blocked.
  }
}

function applyTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.body.dataset.theme = nextTheme;

  if (!themeToggle || !themeLabel) return;

  const isLight = nextTheme === "light";
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  themeLabel.textContent = isLight ? "Dark" : "Light";
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

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });
}

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

setInterval(updateMockReadings, 900);
applyTheme(getSavedTheme());
updateMockReadings();
