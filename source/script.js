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
const switcher = document.querySelector(".slider__scale-switcher");

slider.classList.remove("slider__image-container--nojs");

switcher.addEventListener("click", function () {
  if (slider.classList.contains("slider__image-container--before")) {
    slider.classList.remove("slider__image-container--before");
    slider.classList.add("slider__image-container--after");
  } else {
    slider.classList.add("slider__image-container--before");
    slider.classList.remove("slider__image-container--after");
  }
});
