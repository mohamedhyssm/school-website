"use strict";
let firstIdeaContainer = document.querySelector(".article-1 .container"), secondIdeaContainer = document.querySelector(".article-2 .container"), firstFeatureContainer = document.querySelector(".feature-1 .container"), secondFeatureContainer = document.querySelector(".feature-2 .container"), ideaHeading = document.getElementById("main-heading-idea"), featureHeading = document.getElementById("main-heading-feature");
let settingScroll = 0;
if (window.innerWidth <= 600) {
    settingScroll = 300;
}
window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
        settingScroll = 300;
    }
    else {
        settingScroll = 0;
    }
});
window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        ideaHeading.classList.add("leftToRight");
    }
    if (window.scrollY >= 500) {
        firstIdeaContainer.classList.add("fadeInDown");
    }
    if (window.scrollY >= (800 + settingScroll)) {
        secondIdeaContainer.classList.add("fadeInDown");
    }
    if (window.scrollY >= (1200 + settingScroll)) {
        featureHeading.classList.add("leftToRight");
    }
    if (window.scrollY >= (1500 + settingScroll)) {
        firstFeatureContainer.classList.add("fadeInDown");
    }
    if (window.scrollY >= (1800 + settingScroll)) {
        secondFeatureContainer.classList.add("fadeInDown");
    }
});
//# sourceMappingURL=main.js.map