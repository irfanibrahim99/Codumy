// NAV-BAR RESPONSIVE
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav-content");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// COUNT-DOWN HOME
const number = document.getElementsByClassName('.stat-number');

// CLICK OVERVIEW-COURSE
let coll = document.getElementsByClassName("btn-overview");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.previousElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
