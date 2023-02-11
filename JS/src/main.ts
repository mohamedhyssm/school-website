// nav
let burgerIcon = <HTMLDivElement> document.getElementById("burgerIcon"),
ulNavBar = <HTMLDivElement> document.getElementById("ulNavBar"),
liNavBar: Element[] = Array.from(ulNavBar.children);
// Ideas Article
let firstIdeaContainer = <HTMLDivElement>document.querySelector(".article-1 .container"),
  secondIdeaContainer = <HTMLDivElement>document.querySelector(".article-2 .container"),
  // Feature Articles
  firstFeatureContainer = <HTMLDivElement>document.querySelector(".feature-1 .container"),
  secondFeatureContainer = <HTMLDivElement>document.querySelector(".feature-2 .container"),
  // main Heading
  ideaHeading = <HTMLHeadElement>document.getElementById("main-heading-idea"),
  featureHeading = <HTMLHeadElement>document.getElementById("main-heading-feature"),
  settingScroll: number= 0;

if (window.innerWidth <= 600) {
  settingScroll= 300
  liNavBar.forEach( (li) => (li as HTMLDivElement).addEventListener("click", function () {
    ulNavBar.classList.remove("ul-flex")
  }))
}

burgerIcon.addEventListener("click", () => {
  ulNavBar.classList.toggle("ul-flex")
}) 

window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    settingScroll= 300
      // navBar
    liNavBar.forEach( (li) => (li as HTMLDivElement).addEventListener("click", function () {
    ulNavBar.classList.remove("ul-flex")
  }))
  }
  else {
    settingScroll = 0
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    ideaHeading.classList.add("leftToRight")
  }
  if (window.scrollY >= 500) {
    firstIdeaContainer.classList.add("fadeInDown")
  }
  if (window.scrollY >= (800 + settingScroll)) {
    secondIdeaContainer.classList.add("fadeInDown")
  }
  if (window.scrollY >= (1200 + settingScroll)) {
    featureHeading.classList.add("leftToRight")
  }
  if (window.scrollY >= (1500 + settingScroll)) {
    firstFeatureContainer.classList.add("fadeInDown")
  }
  if (window.scrollY >= (1800 + settingScroll)) {
    secondFeatureContainer.classList.add("fadeInDown")
  }
})