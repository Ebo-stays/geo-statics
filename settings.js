// settings.js

// Get the color picker and apply button
const colorPicker = document.getElementById('color-picker');
const applyThemeBtn = document.getElementById('apply-theme-btn');

// Apply theme color
applyThemeBtn.addEventListener('click', () => {
  const selectedColor = colorPicker.value;
  document.documentElement.style.setProperty('--theme-color', selectedColor);
  localStorage.setItem('themeColor', selectedColor);
});

// Load theme on page load
function loadTheme() {
  const savedColor = localStorage.getItem('themeColor');
  if (savedColor) {
    document.documentElement.style.setProperty('--theme-color', savedColor);
  }
}

loadTheme();
