







function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}




// Initialize theme
if (localStorage.theme === "dark" || !("theme" in localStorage)) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
} else {
  document.documentElement.classList.remove("dark");
}

// Menu controls
function openMenu() {
  toggleMenu("-16rem");
}

function closeMenu() {
  toggleMenu("16rem");
}
