"use strict";
let firstArticelContainer = document.querySelector(".article-1 .container"), secondArticelContainer = document.querySelector(".article-2 .container"), ideaHeading = document.getElementById("main-heading");
let settingScroll = 0;
if (window.innerWidth <= 767) {
    settingScroll = 400;
}
window.addEventListener("resize", () => {
    if (window.innerWidth <= 767) {
        settingScroll = 400;
    }
    else {
        settingScroll = 0;
    }
});
window.addEventListener("scroll", () => {
    if (window.scrollY <= 300) {
        ideaHeading.classList.add("leftToRight");
    }
    else if (window.scrollY <= (500 + settingScroll)) {
        firstArticelContainer.classList.add("fadeInDown");
    }
    else if (window.scrollY <= (800 + settingScroll)) {
        secondArticelContainer.classList.add("fadeInDown");
    }
});
//# sourceMappingURL=main.js.map