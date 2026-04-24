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

// RUN ON PAGE LOAD
window.addEventListener("DOMContentLoaded", applyTheme);

// TOGGLE BUTTON
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");

    // 🔥 IMPORTANT: force update same page immediately
    applyTheme();
  });
}

// 🔥 SYNC FROM OTHER PAGES/TABS
window.addEventListener("storage", (event) => {
  if (event.key === "theme") {
    applyTheme();
  }
});
