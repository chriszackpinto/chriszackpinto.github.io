"use strict:";

const mainTitle = document.querySelector(".main-title");
const logo = document.querySelector(".header-nav-logo");
const link = document.querySelector(".header-nav-list");

const projects = document.querySelector(".projects");
const projectList = document.querySelector(".projects-list");

const tl = new TimelineMax();

tl.fromTo(mainTitle, 1, { height: "0%" }, { height: "100%", ease: "none" })
  .fromTo(
    mainTitle,
    1.2,
    { width: "1920px" },
    { width: "1200px", ease: "bounce.out" },
    "-=0.2"
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(link, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");

const bgColor = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) mainTitle.style.backgroundColor = "#16ade3";
  else mainTitle.style.backgroundColor = "#1e1e20";
};

const splashObserver = new IntersectionObserver(bgColor, {
  root: null,
  threshold: 0.8,
});

splashObserver.observe(projects);

projectList.classList.add("item-hidden");

const revealItem = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("item-hidden");
  observer.unobserve(entry.target);
};

const itemObserver = new IntersectionObserver(revealItem, {
  root: null,
  threshold: 0,
});

itemObserver.observe(projectList);
