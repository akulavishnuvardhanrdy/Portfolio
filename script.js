// Selectors
const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLink = document.querySelector("nav ul");
const project = document.getElementById("specific-project");



// Functions
function toggleMenu(transformValue) {
  sideMenu.style.transform = `translateX(${transformValue})`;
}

function handleScroll() {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLink.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLink.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  }
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}


window.addEventListener("scroll", handleScroll);

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
