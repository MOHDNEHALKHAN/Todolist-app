// button that link index.html file to homepage.html file
const botBtn = document.querySelector(".bot-btn");

botBtn.addEventListener("click", function () {
  window.location.href = "Homepage.html";
});

// hamburger icon working

function onClickHamburger(){
document.getElementById("hamburger").classList.toggle("cross-icon");
document.getElementById("nav").classList.toggle("change-ham");
const hamBurger = document.getElementById("hamburger");
const navBar = document.getElementById("navigation");
const hpImg = document.querySelector(".hp-mid");
const hpFooter = document.querySelector(".hp-btn");
const dhFooter = document.querySelector(".dh-footer")                     

  
  if (hamBurger.classList.contains("cross-icon")) {
    // Hamburger is now a cross, hide elements and set transparent background
    hpImg.style.display = "none";
    hpFooter.style.display = "none";
    navBar.style.background = "none";
    dhFooter.style.display = "none";
  }
     else 
     {
    // Hamburger is back, show elements and set yellow background
    hpImg.style.display = "flex"; 
    hpFooter.style.display = "flex";
    navBar.style.background = "#faea58";
    dhFooter.style.display = "flex"; 
    }
}