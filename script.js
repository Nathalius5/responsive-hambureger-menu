const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");
const navLinks = document.querySelectorAll("nav ul li a");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList.contains("fa-bars")) {
    openMenu();
  } else {
    closeMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

function openMenu() {
  hamburgerIcon.classList.remove("fa-bars");
  hamburgerIcon.classList.add("fa-square-xmark");
  menuList.style.display = "block";
}

function closeMenu() {
  hamburgerIcon.classList.remove("fa-square-xmark");
  hamburgerIcon.classList.add("fa-bars");
  menuList.style.display = "none";
}
