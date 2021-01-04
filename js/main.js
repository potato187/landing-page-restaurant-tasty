/* SHOW MENU */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/* Remove Button Mobile */
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll("a.nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLinks.forEach((navLink) => navLink.addEventListener("click", linkAction));

/* SCROLL SECTION ACTIVE LINK */

const sections = document.querySelectorAll("section[id");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const currentHeigh = current.offsetHeight;
    const currentTop = current.offsetTop - 50;
    const currentId = current.getAttribute("id");

    if (scrollY > currentTop && scrollY <= currentTop + currentHeigh) {
      document
        .querySelector(`.nav__menu  a[href*=${currentId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu  a[href*=${currentId}]`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* Change BackGround Header */

function scrollHeader() {
  const Header = document.getElementById("header");
  if (this.pageYOffset >= 200) {
    Header.classList.add("scroll-header");
  } else {
    Header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/* Show Scroll Top Button */

function showScrollTop() {
  const scrollTop = document.getElementById("scrollTop");
  if (this.pageYOffset >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", showScrollTop);

/* Scroll Top */
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const scrollButton = document.getElementById("scrollTop");
scrollButton.addEventListener("click", scrollTop);

/* MODE DARK/LIGHT THEME */

const themeButton = document.getElementById("change-theme");
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "dark" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeButton.classList.toggle("bx-sun");

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
