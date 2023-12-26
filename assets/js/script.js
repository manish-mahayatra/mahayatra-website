'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});




var slideDelay = 1.5;
var slideDuration = 0.3;

var slides = document.querySelectorAll(".slide");
var prevButton = document.querySelector("#prevButton");
var nextButton = document.querySelector("#nextButton");

for (var i = 0; i < slides.length; i++) {
  TweenLite.set(slides[i], {
    backgroundColor: Math.random() * 0xffffff,
    xPercent: i * 100
  });
}

var wrap = wrapPartial(-100, (slides.length - 1) * 100);
var timer = TweenLite.delayedCall(slideDelay, autoPlay);
var animation = null;

prevButton.addEventListener("click", function () {
  animateSlides(100);
});

nextButton.addEventListener("click", function () {
  animateSlides(-100);
});

function animateSlides(delta) {

  animation = TweenMax.to(slides, slideDuration, {
    xPercent: function (i, target) {
      return (Math.round(target._gsTransform.xPercent / 100) * 100) + delta;
    },
    modifiers: {
      xPercent: wrap
    },
    onComplete: restartTimer
  });
}

function autoPlay() {
  if (!animation) {
    animateSlides(-100);
  }
}

function restartTimer() {
  if (animation === this) {
    animation = null;
    timer.restart(true);
  }
}

function wrapPartial(min, max) {
  var r = max - min;
  return function (value) {
    var v = value - min;
    return ((r + v % r) % r) + min;
  }
}
