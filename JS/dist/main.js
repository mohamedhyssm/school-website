"use strict";
let burgerIcon = document.getElementById("burgerIcon"), ulNavBar = document.getElementById("ulNavBar"), anchorNavBar = Array.from(document.querySelectorAll("#ulNavBar li a")), ideaLink = document.getElementById("ideaLink"), featurelink = document.getElementById("featurelink"), firstIdea = document.getElementById("article-1"), firstFeature = document.getElementById("feature-1"), firstIdeaContainer = document.querySelector(".article-1 .container"), secondIdeaContainer = document.querySelector(".article-2 .container"), firstFeatureContainer = document.querySelector(".feature-1 .container"), secondFeatureContainer = document.querySelector(".feature-2 .container"), ideaHeading = document.getElementById("main-heading-idea"), featureHeading = document.getElementById("main-heading-feature");
handleNavBar();
burgerIcon.addEventListener("click", () => {
    ulNavBar.classList.toggle("ul-flex");
});
ideaLink.onclick = function (e) {
    e.preventDefault();
    handleScroll(firstIdea);
};
featurelink.onclick = function (e) {
    e.preventDefault();
    handleScroll(firstFeature);
};
window.addEventListener("resize", () => {
    handleNavBar();
});
window.onload = () => {
    scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        ideaHeading.classList.add("leftToRight");
    }
    if (window.scrollY >= (firstIdeaContainer.offsetTop - 400)) {
        firstIdeaContainer.classList.add("fadeInDown");
    }
    if (window.scrollY >= (secondIdeaContainer.offsetTop - 400)) {
        secondIdeaContainer.classList.add("fadeInDown");
    }
    if (window.scrollY >= (secondIdeaContainer.offsetTop - 400)) {
        featureHeading.classList.add("leftToRight");
    }
    if (window.scrollY >= (firstFeatureContainer.offsetTop - 400)) {
        firstFeatureContainer.classList.add("fadeInDown");
    }
    if (window.scrollY >= (secondFeatureContainer.offsetTop - 400)) {
        secondFeatureContainer.classList.add("fadeInDown");
    }
    if (window.scrollY <= firstIdea.offsetTop - 90) {
        removeActiveAnchors();
        anchorNavBar[0].classList.add("active");
    }
    if (window.scrollY >= (firstIdea.offsetTop - 90)) {
        removeActiveAnchors();
        anchorNavBar[1].classList.add("active");
    }
    if (window.scrollY >= (firstFeature.offsetTop - 90)) {
        removeActiveAnchors();
        anchorNavBar[2].classList.add("active");
    }
});
function handleNavBar() {
    if (window.innerWidth <= 600) {
        anchorNavBar.forEach((a) => a.addEventListener("click", function () {
            ulNavBar.classList.remove("ul-flex");
        }));
    }
}
function handleScroll(section) {
    scrollTo({
        top: section.offsetTop - 90,
        behavior: "smooth"
    });
}
function removeActiveAnchors() {
    anchorNavBar.forEach((a) => {
        a.classList.remove("active");
    });
}
//# sourceMappingURL=main.js.map