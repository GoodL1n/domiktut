import "./style.scss";
import "./header.scss";
import "./preview.scss";
import "./about.scss";
import "./question.scss";
import "./footer.scss";
import "./side-menu.scss";
import "./form.scss";

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

const btnRequest = document.getElementById("btn-request");
const btnRequest2 = document.getElementById("btn-request-2");
const btnRequestCoop = document.getElementById("btn-request-coop");
const btnRequestCoop2 = document.getElementById("btn-request-coop-2");
const btnRequestCoop3 = document.getElementById("btn-request-coop-3");
const formRequest = document.getElementById("form-request");
const formCoop = document.getElementById("form-coop");
const closeFormRequestCoopBtn = document.getElementById("form-coop__btn-close");
const closeFormRequestBtn = document.getElementById("form-request__btn-close");

btnRequest?.addEventListener("click", (element) => {
  element.stopPropagation();

  if (formRequest) {
    formRequest.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
});

btnRequest2?.addEventListener("click", (element) => {
  element.stopPropagation();

  if (formRequest) {
    formRequest.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
});

btnRequestCoop?.addEventListener("click", (element) => {
  element.stopPropagation();

  if (formCoop) {
    formCoop.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
});

btnRequestCoop2?.addEventListener("click", (element) => {
  element.stopPropagation();

  if (formCoop) {
    formCoop.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
});

btnRequestCoop3?.addEventListener("click", (element) => {
  element.stopPropagation();

  if (formCoop) {
    formCoop.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
});

closeFormRequestBtn?.addEventListener("click", (element) => {
  element.stopPropagation();

  if (formRequest && formRequest.style.display !== "none") {
    formRequest.style.display = "none";
  }

  document.body.style.overflow = "";
});

closeFormRequestCoopBtn?.addEventListener("click", (element) => {
  element.stopPropagation();

  if (formCoop && formCoop.style.display !== "none") {
    formCoop.style.display = "none";
  }

  document.body.style.overflow = "";
});

const questions = Array.from(document.querySelectorAll(".question"));

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    event.preventDefault();

    const answer = question.querySelector(".question__answer");

    answer?.classList.toggle("visisble");
  });
});

document.querySelectorAll('a[href*="#"]').forEach((anchor) =>
  anchor.addEventListener("click", function (e) {
    const anchorTargetID = anchor?.getAttribute("href")!.substring(1);
    const $anchorTarget = document.getElementById(anchorTargetID);

    if (!$anchorTarget) return;

    e.preventDefault();
    $anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  }),
);
