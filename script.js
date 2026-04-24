const toggleBtn = document.getElementById("themeToggle");

// APPLY THEME
function applyTheme() {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
}

// TOGGLE THEME
function toggleTheme() {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
  applyTheme();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }
});

// SYNC ACROSS PAGES
window.addEventListener("storage", (event) => {
  if (event.key === "theme") {
    applyTheme();
  }
});
