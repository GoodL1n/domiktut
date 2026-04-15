import "./style.scss";
import "./header.scss";
import "./preview.scss";
import "./about.scss";
import "./question.scss";
import "./footer.scss";
import "./side-menu.scss";

const hamburger = document.querySelector(".header__hamburger-btn");
const closeHamburgerBtn = document.querySelector(".side-menu__btn-close");
const sideMenu = document.getElementById("side-menu");

hamburger?.addEventListener("click", (element) => {
  element.stopPropagation();

  if (sideMenu) {
    sideMenu.style.right = "0";

    document.body.style.overflow = "hidden";
  }
});

closeHamburgerBtn?.addEventListener("click", (element) => {
  element.stopPropagation();

  if (sideMenu) {
    sideMenu.style.right = "-100%";
    document.body.style.overflow = "";
  }
});
