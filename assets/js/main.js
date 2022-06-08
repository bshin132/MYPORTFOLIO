//MENU SHOW Y HIDDEN
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//MENU SHOW
//VALIDATE OF CONSTANT EXISTS
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//MENU HIDE
//VALIDATE IF CONSTANT EXISTS
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
