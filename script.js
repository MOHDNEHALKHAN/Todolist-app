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
  const tsAdd = document.querySelector(".ts-add");
  const hpBody = document.querySelector(".hp");

  if (hamBurger.classList.contains("cross-icon")) {
    // Hamburger is now a cross, hide elements and set transparent background
    if (hpImg) hpImg.style.display = "none";
    if (hpFooter) hpFooter.style.display = "none";
    if (navBar) navBar.style.background = "none";

    if (tsAdd && tsAdd.style.display == "flex") {
      if (dhFooter) dhFooter.style.display == "none";
      if (hpImg) hpImg.style.display = "none";
      tsAdd.style.display = "none";
    }

    if (dhFooter && dhFooter.style.display == "block") {
      if (hpImg) hpImg.style.display == "none";
      if (tsAdd) tsAdd.style.display == "none";
      dhFooter.style.display = "none";
      hpBody.style.background = "#fff";
    }
  } else {
    // Hamburger is back, show elements and set yellow background
    if (hpImg) hpImg.style.display = "flex";
    if (hpFooter) hpFooter.style.display = "flex";
    if (navBar) navBar.style.background = "#faea58";

    if (tsAdd && tsAdd.style.display == "none") {
      if (dhFooter) dhFooter.style.display == "block";
      if (hpImg) hpImg.style.display = "none";
      tsAdd.style.display = "flex";
    }

    if (dhFooter && dhFooter.style.display == "none") {
      if (tsAdd) tsAdd.style.display == "none";
      if (hpImg) hpImg.style.display = "none";
      dhFooter.style.display = "block";
      hpBody.style.background = "#6cb9e5";
    }
  }
}

// Feature for save icon
function saveTask() {
  const hpBody = document.querySelector(".hp");
  const hpMid = document.querySelector(".hp-mid");
  const hpFooter = document.querySelector(".hp-btn");
  const hamBurger = document.getElementById("hamburger");
  const deleteHead = document.getElementById("dl-head");
  const navBar = document.getElementById("navigation");
  const historyFooter = document.getElementById("history-footer");
  const historyHeading = document.getElementById("history-head");

  if (hpMid) hpMid.style.display = "none";
  if (hpFooter) hpFooter.style.display = "none";
  if (hpBody) hpBody.style.background = "#6cb9e5";
  if (hamBurger) hamBurger.style.display = "none";
  if (deleteHead) deleteHead.style.display = "block";
  if (navBar) navBar.style.display = "flex";
  if (navBar) navBar.style.justifyContent = "center";
  if (navBar) navBar.style.alignItems = "center";
  if (historyFooter) historyFooter.style.display = "flex";
  if (historyHeading) historyHeading.style.display = "block";
}

// Feature for Delete-Task icon
function deleteTask() {
  const dhFooter = document.querySelector(".dh-footer");
  const hpMid = document.querySelector(".hp-mid");
  const hpBody = document.querySelector(".hp");

  if (dhFooter) dhFooter.style.display = "block";
  if (hpMid) hpMid.style.display = "none";
  if (hpBody) hpBody.style.background = "#6cb9e5";
}

// Feature for Add-Task icon
function addTask() {
  const tsAdd = document.querySelector(".ts-add");
  const hpMid = document.querySelector(".hp-mid");

  if (tsAdd) tsAdd.style.display = "flex";
  if (hpMid) hpMid.style.display = "none";
}

// feature for hamburger if user click on save task

function saveTasksl() {
  const hpBody = document.querySelector(".hp");
  const hpMid = document.querySelector(".hp-mid");
  const hpFooter = document.querySelector(".hp-btn");
  const hamBurger = document.getElementById("hamburger");
  const deleteHead = document.getElementById("dl-head");
  const navBar = document.getElementById("navigation");
  const historyFooter = document.getElementById("history-footer");
  const historyHeading = document.getElementById("history-head");
  const navHistory = document.getElementById("nav");

  if (hamBurger.classList.contains("cross-icon")) {
    if (hpMid) hpMid.style.display = "none";
    if (hpFooter) hpFooter.style.display = "none";
    if (hpBody) hpBody.style.background = "#6cb9e5";
    if (hamBurger) hamBurger.style.display = "none";
    if (deleteHead) deleteHead.style.display = "block";
    if (navHistory) navHistory.style.display = "none";
    if (navBar) navBar.style.display = "flex";
    if (navBar) navBar.style.justifyContent = "center";
    if (navBar) navBar.style.alignItems = "center";
    if (navBar) navBar.style.background = "#faea58";
    if (historyFooter) historyFooter.style.display = "flex";
    if (historyHeading) historyHeading.style.display = "block";
  } else {
    if (hpMid) hpMid.style.display = "none";
    if (hpFooter) hpFooter.style.display = "none";
    if (hpBody) hpBody.style.background = "#6cb9e5";
    if (hamBurger) hamBurger.style.display = "none";
    if (deleteHead) deleteHead.style.display = "block";
    if (navBar) navBar.style.display = "flex";
    if (navBar) navBar.style.justifyContent = "center";
    if (navBar) navBar.style.alignItems = "center";
    if (historyFooter) historyFooter.style.display = "flex";
    if (historyHeading) historyHeading.style.display = "block";
  }
}

// feature for hamburger if user click on delete task
function deleteTasksl() {
  const dhFooter = document.querySelector(".dh-footer");
  const hpMid = document.querySelector(".hp-mid");
  const hpBody = document.querySelector(".hp");
  const hamBurger = document.getElementById("hamburger");
  const navDelete = document.getElementById("nav");
  const navBar = document.getElementById("navigation");
  const completeHead = document.getElementById("cp-head");

  if (hamBurger.classList.contains("cross-icon")) {
    if (dhFooter) dhFooter.style.display = "block";
    if (hpMid) hpMid.style.display = "none";
    if (hpBody) hpBody.style.background = "#6cb9e5";
    if (navDelete) navDelete.style.display = "none";
    if (navBar && navBar.style.background == "none") {
      navBar.style.background = "#faea58";
    }
    if (completeHead) completeHead.style.display = "block";
    if (navBar) navBar.style.display = "flex";
    if (navBar) navBar.style.justifyContent = "center";
    if (navBar) navBar.style.alignItems = "center";
    if (hamBurger) hamBurger.style.display = "none";
  } else {
    if (dhFooter) dhFooter.style.display = "block";
    if (navDelete) navDelete.style.display = "none";
    if (hpMid) hpMid.style.display = "none";
    if (hpBody) hpBody.style.background = "#6cb9e5";
    if (completeHead) completeHead.style.display = "block";
    if (navBar) navBar.style.display = "flex";
    if (navBar) navBar.style.justifyContent = "center";
    if (navBar) navBar.style.alignItems = "center";
    if (hamBurger) hamBurger.style.display = "none";
  }
}
