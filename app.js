"use strict:";

const mainTitle = document.querySelector(".main-title");
const logo = document.querySelector(".header-nav-logo");
const link = document.querySelector(".header-nav-list");

const tl = new TimelineMax();

tl.fromTo(mainTitle, 1, { height: "0%" }, { height: "100%", ease: "none" })
  .fromTo(
    mainTitle,
    1.2,
    { width: "100%" },
    { width: "90%", ease: "bounce.out" }
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(link, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");

// Hide background on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mainTitle.style.backgroundColor = "#1e1e20";
  } else {
    mainTitle.style.backgroundColor = "#16ade3";
  }
}
