"use strict:";

main = document.querySelector(".main");

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);

// Hide background on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    main.style.backgroundColor = "#1e1e20";
  } else {
    main.style.backgroundColor = "#16ade3";
  }
}
