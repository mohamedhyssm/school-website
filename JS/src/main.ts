// navbar
let burgerIcon = <HTMLDivElement>document.getElementById("burgerIcon"),
  ulNavBar = <HTMLUListElement>document.getElementById("ulNavBar"), 
  anchorsNavBar = <HTMLAnchorElement[]> Array.from(document.querySelectorAll("#ulNavBar li a")), 
  ideaLink = <HTMLAnchorElement>document.getElementById("ideaLink"), 
  featurelink = <HTMLAnchorElement>document.getElementById("featurelink"), 
  // first feature and idea article
  firstIdea = <HTMLDivElement>document.getElementById("article-1"), 
  firstFeature = <HTMLDivElement>document.getElementById("feature-1"), 
  // all articles and features container
  firstIdeaContainer = <HTMLDivElement>document.querySelector(".article-1 .container"), 
  secondIdeaContainer = <HTMLDivElement>document.querySelector(".article-2 .container"), 
  firstFeatureContainer = <HTMLDivElement>document.querySelector(".feature-1 .container"), 
  secondFeatureContainer = <HTMLDivElement>document.querySelector(".feature-2 .container"), 
  // feature and idea title
  ideaHeading = <HTMLDivElement>document.getElementById("main-heading-idea"), 
  featureHeading = <HTMLDivElement>document.getElementById("main-heading-feature");


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
    anchorsNavBar[0].classList.add("active");
  }
  if (window.scrollY >= (firstIdea.offsetTop - 90)) {
    removeActiveAnchors();
    anchorsNavBar[1].classList.add("active");
  }
  if (window.scrollY >= (firstFeature.offsetTop - 90)) {
    removeActiveAnchors();
    anchorsNavBar[2].classList.add("active");
  }
});

function handleNavBar() {
  if (window.innerWidth <= 600) {
      anchorsNavBar.forEach((a) => a.addEventListener("click", function () {
      ulNavBar.classList.remove("ul-flex");
    }));
  }
}


function handleScroll(section: HTMLDivElement): void {
  scrollTo({
    top: section.offsetTop - 90,
    behavior: "smooth"
  });
}

function removeActiveAnchors(): void {
  anchorsNavBar.forEach((a) => {
      a.classList.remove("active");
  });
}
