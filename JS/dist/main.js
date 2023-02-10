"use strict";
let firstArticelContainer = document.querySelector(".article-1 .container"), secondArticelContainer = document.querySelector(".article-2 .container"), ideaHeading = document.getElementById("main-heading");
window.addEventListener("scroll", () => {
    if (window.scrollY <= 300) {
        ideaHeading.classList.add("leftToRight");
    }
    else if (window.scrollY <= 500) {
        firstArticelContainer.classList.add("fadeInDown");
    }
    else if (window.scrollY <= 800) {
        secondArticelContainer.classList.add("fadeInDown");
    }
    console.log(window.scrollY);
});
//# sourceMappingURL=main.js.map