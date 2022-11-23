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
  const header = document.querySelector("#header");

  window.scrollY > 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUpButton = document.querySelector("#scrollup");

  window.scrollY > 350
    ? scrollUpButton.classList.add("show-scroll")
    : scrollUpButton.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const scrollReveal = new ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

scrollReveal.reveal(".home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info");
scrollReveal.reveal(".home__info", { origin: "bottom" });
scrollReveal.reveal(".about__info, .recently__info", { origin: "left" });
scrollReveal.reveal(".about__img, .recently__img", { origin: "right" });
scrollReveal.reveal(".popular__card", { interval: 100 });
