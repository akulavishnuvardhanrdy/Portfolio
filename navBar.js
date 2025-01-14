// JavaScript for Dynamic Nav and Theme Toggle
const navBar = document.querySelector("nav");
const navLink = document.querySelector("nav ul");
const navItems = [
    { name: "Home", href: "#top" },
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "My Work", href: "#work" },
    { name: "Education", href: "#education" },
    { name: "Services", href: "#services" },
  ];
  
  // Populate Nav Links
  const navLinks = document.getElementById("navLinks");
  const sideMenu = document.getElementById("sideMenu");

  function toggleMenu(transformValue) {
    sideMenu.style.transform = `translateX(${transformValue})`;
  }
  
  navItems.forEach((item) => {
    const listItem = `<li><a href="${item.href}">${item.name}</a></li>`;
    navLinks.innerHTML += listItem;
    sideMenu.innerHTML += `<li><a href="${item.href}" onclick="closeMenu()">${item.name}</a></li>`;
  });

  
  
  
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
  
// Open and Close Mobile Menu
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");

menuOpen.addEventListener("click", () => {
    sideMenu.classList.remove("-right-64");
    sideMenu.classList.add("right-0");
});

menuClose.addEventListener("click", closeMenu);
  
function closeMenu() {
    sideMenu.classList.remove("right-0");
    sideMenu.classList.add("-right-64");
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
  window.addEventListener("scroll", handleScroll);  