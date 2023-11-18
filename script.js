// button that link index.html file to homepage.html file
const botBtn = document.querySelector(".bot-btn");

botBtn.addEventListener("click", function () {
  window.location.href = "Homepage.html";
});

// hamburger icon working

function onClickHamburger(){
document.getElementById("hamburger").classList.toggle("cross-icon");
document.getElementById("nav").classList.toggle("change-ham");

const divToHide1 = document.querySelector(".hp-mid");
divToHide1.style.display = "none";
}