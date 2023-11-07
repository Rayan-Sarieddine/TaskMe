"use strict";
const card1 = document.querySelector(".header-card1");
const card2 = document.querySelector(".header-card2");
const card3 = document.querySelector(".header-card3");
const card4 = document.querySelector(".header-card4");

const btn1 = document.querySelectorAll(".header-card_btn")[0];
const btn2 = document.querySelectorAll(".header-card_btn")[1];
const btn3 = document.querySelectorAll(".header-card_btn")[2];
const btn4 = document.querySelectorAll(".header-card_btn")[3];

btn1.addEventListener("click", function () {
  if (card2.classList.contains("no-display")) {
    card2.classList.remove("no-display");
  } else {
    btn4.classList.add("header-warning");
    setTimeout(function () {
      //settimeout function source: https://www.playerzero.ai/lib/how-to-set-time-delay-in-javascript
      btn4.classList.remove("header-warning");
    }, 200);
  }
});
btn2.addEventListener("click", function () {
  if (card3.classList.contains("no-display")) {
    card3.classList.remove("no-display");
  } else {
    btn4.classList.add("header-warning");
    setTimeout(function () {
      btn4.classList.remove("header-warning");
    }, 200);
  }
});
btn3.addEventListener("click", function () {
  if (card4.classList.contains("no-display")) {
    card4.classList.remove("no-display");
  } else {
    btn4.classList.add("header-warning");
    setTimeout(function () {
      btn4.classList.remove("header-warning");
    }, 200);
  }
});
