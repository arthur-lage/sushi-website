/*=============== SHOW MENU ===============*/

const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLinks.forEach((link) => link.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
  const header = document.querySelector("#header")

  window.scrollY > 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header")
}

window.addEventListener("scroll", scrollHeader)

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUpButton = document.querySelector("#scrollup")

  window.scrollY > 350 ?  scrollUpButton.classList.add("show-scroll") : scrollUpButton.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
