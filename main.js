// Scroll To Top
let span = document.querySelector(".scroll-to-top");

window.onscroll = function () {
  // console.log(this.scrollY);
  if (this.scrollY >= 1200) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Fill Skills Section
let skillsSection = document.querySelector(".our-skills");
let skillsSpan = document.querySelectorAll(".skill span");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    skillsSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// Fill Stats Section
let numbers = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Show Mega Menu On Click
let liMegaMenu = document.querySelector(".header .mega-menu-li");
let megaMenu = document.querySelector(".mega-menu");

megaMenu.style.visibility = "hidden";

liMegaMenu.addEventListener("click", function () {
  if (megaMenu.style.visibility == "hidden") {
    megaMenu.style.visibility = "visible";
  } else {
    megaMenu.style.visibility = "hidden";
  }
});

// Start Count Down

// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiffrence = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiffrence / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiffrence % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiffrence % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}`: days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`: hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

  if(dateDiffrence <= 0) {
    clearInterval(counter);
  }
}, 1000);
