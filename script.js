const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobilNav = document.querySelector(".mobilNav");


hamburger.addEventListener("click", () => {
    bar1.classList.toggle("hamburger-line1");
    bar2.classList.toggle("hamburger-line2");
    bar3.classList.toggle("hamburger-line3");
    mobilNav.classList.toggle("openSideBar");
});