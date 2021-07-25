import { setLazyLoad } from "./components/LazyLoad.js";
// import { setLazyLoad } from "./components/MenuButton";

addEventListener("DOMContentLoaded", () => {
  setLazyLoad(true);
});

const $menuBtn = document.querySelector(".menu");
const $closeMenuBtn = document.querySelector(".nav__close-btn");
const $nav = document.querySelector(".nav");

const $body = document.body;

$menuBtn.addEventListener("click", () => {
  $nav.classList.add("show");
});

$closeMenuBtn.addEventListener("click", (e) => {
  $nav.classList.remove("show");
});

$body.addEventListener("click", (e) => {
  const classes = e.target.classList;

  if (classes.contains("nav__link")) {
    $nav.classList.remove("show");
  }
});
