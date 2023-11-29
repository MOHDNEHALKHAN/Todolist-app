// button that link index.html file to homepage.html file
const botBtn = document.querySelector(".bot-btn");

botBtn.addEventListener("click", function () {
  window.location.href = "Homepage.html";
});

// hamburger icon working

function onClickHamburger() {
  document.getElementById("hamburger").classList.toggle("cross-icon");
  document.getElementById("nav").classList.toggle("change-ham");
  const hamBurger = document.getElementById("hamburger");
  const navBar = document.getElementById("navigation");
  const hpImg = document.querySelector(".hp-mid");
  const hpFooter = document.querySelector(".hp-btn");
  const dhFooter = document.querySelector(".dh-footer");
  const stPage = document.querySelector(".st");
  const dhPage = document.querySelector(".dh");
  const tsPage = document.querySelector(".ts-add");
  const noresultFound = document.getElementById("new-div");
  const taskContainer = document.getElementById("taskContainer");

  if (hamBurger.classList.contains("cross-icon")) 
  {
    // Hamburger is now a cross, hide elements and set transparent background
    if (hpImg) hpImg.style.display = "none";
    if (hpFooter) hpFooter.style.display = "none";
    if (navBar) navBar.style.background = "none";
    if (dhFooter) dhFooter.style.display = "none";
    if (stPage) stPage.style.background = "transparent";
    if (stPage) stPage.style.overflow = "hidden";
    if (dhPage) dhPage.style.background = "transparent";
    if (tsPage) tsPage.style.display = "none";
    if (noresultFound) noresultFound.style.display = "none";
    if (taskContainer) taskContainer.style.display = "none";
  } 
  else 
  {
    // Hamburger is back, show elements and set yellow background
    if (hpImg) hpImg.style.display = "flex";
    if (hpFooter) hpFooter.style.display = "flex";
    if (navBar) navBar.style.background = "#faea58";
    if (dhFooter) dhFooter.style.display = "block";
    if (stPage) stPage.style.background = "#6cb9e5";
    if (stPage) stPage.style.overflow = "auto";
    if (dhPage) dhPage.style.background = "#fff";
    if (tsPage) tsPage.style.display = "flex";
    if (noresultFound) noresultFound.style.display = "flex";
    if (taskContainer) taskContainer.style.display = "flex";
  }
}

function showDlpage(){

  const showPage = document.getElementById("new-div");
  const dhPage = document.querySelector(".dh");
  const hidedlIcon = document.querySelector(".ch-div")

  showPage.style.display = "flex"
 dhPage.style.background = "transparent";
 hidedlIcon.style.display = "none";
}