let navBackground = document.getElementById("nav__back");
let btn = document.getElementById("nav__btn");

let clientsDiv = document.getElementById("clients__div");
let ownersDiv = document.getElementById("owners__div");

let about = document.getElementById("nav__about");
let sectionAbout = document.getElementById("about");

let work = document.getElementById("nav__work");
let sectionWork = document.getElementById("work");

let review = document.getElementById("nav__review");
let sectionReview = document.getElementById("review");

let workBtn = document.getElementById("work__btn");
let workSecondBtn = document.getElementById("work__second__btn");
let span = document.getElementById("span");
let mainContainer = document.getElementById("main-container");

// navbar backgound to white on scrool
window.onscroll = function (event) {
  let windowTop = event.target.documentElement.scrollTop;

  if (windowTop > 10) {
    navBackground.style.backgroundColor = "#fff";
    navBackground.style.boxShadow = "0px 5px 20px rgba(45, 45, 45, 0.1)";
  } else {
    navBackground.style.backgroundColor = "transparent";
    navBackground.style.boxShadow = "0px 0px 0px transparent";
  }
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Click to the links

let navHeight = document.getElementById("nav__back").clientHeight;

about.addEventListener("click", () => {
  scrollTop(sectionAbout);
});

work.addEventListener("click", () => {
  scrollTop(sectionWork);
});

review.addEventListener("click", () => {
  scrollTop(sectionReview);
});

// main function scrollTo
function scrollTop(height) {
  window.scrollTo({ behavior: "smooth", top: height.offsetTop - navHeight });
}

// work gifs event

workSecondBtn.addEventListener("click", () => {
  span.style.left = "49%";
  span.style.width = "50%";
  ownersDiv.style.display = "flex";
  clientsDiv.style.display = "none";
  mainContainer.classList.remove("first");
  mainContainer.classList.add("second");
});

workBtn.addEventListener("click", () => {
  span.style.left = "1%";
  span.style.width = "43%";
  ownersDiv.style.display = "none";
  clientsDiv.style.display = "flex";
  mainContainer.classList.remove("second");
  mainContainer.classList.add("first");
});

// event btn to top
btn.addEventListener("click", () => {
  window.scroll({ behavior: "smooth", top: 0 });
});
