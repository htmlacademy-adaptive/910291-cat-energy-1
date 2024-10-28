let menuToggle = document.querySelector(".main-nav__toggle");
let mainNav = document.querySelector(".main-nav");
let promo = document.querySelector(".promo");

mainNav.classList.remove("main-nav--nojs");

menuToggle.addEventListener("click", function () {
    if (mainNav.classList.contains("main-nav--closed")) {
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--opened");
    } else {
      mainNav.classList.add("main-nav--closed");
      mainNav.classList.remove("main-nav--opened");
    }
    if(mainNav.classList.contains("main-nav--opened")) {
      promo.classList.add("promo--main-nav-opened");
    } else {
      promo.classList.remove("promo--main-nav-opened");
    }

  });
