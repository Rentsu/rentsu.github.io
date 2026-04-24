// Toggle Light/Dark Mode
function toggleTheme() {
  document.body.classList.toggle("light");
}

// OPTIONAL: auto save theme
window.onload = function () {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
};

function toggleTheme() {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}
