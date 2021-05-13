"use strict:";

const mainTitle = document.querySelector(".main-title");
const logo = document.querySelector(".header-nav-logo");
const link = document.querySelector(".header-nav-list");

const tl = new TimelineMax();

tl.fromTo(mainTitle, 1, { height: "0%" }, { height: "100%", ease: "none" })
  .fromTo(
    mainTitle,
    1.2,
    { width: "1920px" },
    { width: "1200px", ease: "bounce.out" }, "-=0.2"
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

function scrollApp() {
  let projectItem1 = document.querySelector(`.project1`);
  let projectItem2 = document.querySelector(`.project2`);
  let itemPosition = projectItem1.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.2;

  if (itemPosition < screenPosition) {
    projectItem1.classList.add("appear");
    projectItem2.classList.add("appear");
  }
}
window.addEventListener(`scroll`, scrollApp);
