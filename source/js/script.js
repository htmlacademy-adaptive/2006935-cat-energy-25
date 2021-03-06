const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

const slider = document.querySelector(".slider__image-container");
const before = document.querySelector(".slider__scale-text--before");
const after = document.querySelector(".slider__scale-text--after");

slider.classList.remove("slider__image-container--nojs");

before.addEventListener("click", function () {
  slider.classList.add("slider__image-container--before");
  slider.classList.remove("slider__image-container--after");
});
after.addEventListener("click", function () {
  slider.classList.add("slider__image-container--after");
  slider.classList.remove("slider__image-container--before");
});
