// button that link index.html file to homepage.html file
const botBtn = document.querySelector(".bot-btn");

botBtn.addEventListener("click", function(){
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
  const taskIcon = document.getElementById("task-icon");
  const historyFooter = document.getElementById("history-footer");
  const Nores = document.getElementById("noRes");
  const Del = document.getElementById("del");

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

    if (taskIcon && taskIcon.style.display == "flex") {
      taskIcon.style.display = "none";
    }

    if (dhFooter && dhFooter.style.display == "block") {
      if (hpImg) hpImg.style.display == "none";
      if (tsAdd) tsAdd.style.display == "none";
      dhFooter.style.display = "none";
      hpBody.style.background = "#fff";
    }

    if (Nores && Nores.style.display == "flex"){
      if (Nores) Nores.style.display = "none";
      if (hpBody) hpBody.style.background ="none";
    }

    if (historyFooter && historyFooter.style.display == "flex"){
      if (hpImg) hpImg.style.display == "none";
      if (hpFooter) hpFooter.style.display == "none";
      if (historyFooter) historyFooter.style.display = "none";
    }

  } 
  else 
  {
    // Hamburger is back, show elements and set yellow background
    if (hpImg) hpImg.style.display = "flex";
    if (hpFooter) hpFooter.style.display = "flex";
    if (navBar) navBar.style.background = "#faea58";

    if (tsAdd && tsAdd.style.display == "none") {
      if (dhFooter) dhFooter.style.display == "block";
      if (hpImg) hpImg.style.display = "none";
      tsAdd.style.display = "flex";
    }

    if (taskIcon && taskIcon.style.display == "none") {
      if (hpFooter) hpFooter.style.display = "none";
      taskIcon.style.display = "flex";
    }

    if (dhFooter && dhFooter.style.display == "none") {
      if (tsAdd) tsAdd.style.display == "none";
      if (hpImg) hpImg.style.display = "none";
      dhFooter.style.display = "block";
      hpBody.style.background = "#6cb9e5";
    }

    if (Nores && Nores.style.display == "none"){
      if (Nores) Nores.style.display = "flex";
      if (hpBody) hpBody.style.background ="#fff";
    }

    if (historyFooter && historyFooter.style.display == "none"){
      if (hpImg) hpImg.style.display = "none";
      if (hpFooter) hpFooter.style.display = "none";
      if (historyFooter) historyFooter.style.display = "flex";
    }
  }
}

// Feature for save icon
function saveTask() {
  const hpBody = document.querySelector(".hp");
  const hpImg = document.querySelector(".hp-mid");
  const hpFooter = document.querySelector(".hp-btn");
  const historyFooter = document.getElementById("history-footer");
  const historyHeading = document.getElementById("history-head");

  if (historyFooter) historyFooter.style.display = "flex";
  if (historyHeading) historyHeading.style.display = "flex";
  if (hpFooter) hpFooter.style.display = "none";
  if (hpImg) hpImg.style.display = "none";
  if (hpBody) hpBody.style.background = "#6cb9e5";
}

// Feature for Delete-Task icon
function deleteTask() {
  const dhFooter = document.querySelector(".dh-footer");
  const hpImg = document.querySelector(".hp-mid");
  const hpBody = document.querySelector(".hp");

  if (dhFooter) dhFooter.style.display = "block";
  if (hpImg) hpImg.style.display = "none";
  if (hpBody) hpBody.style.background = "#6cb9e5";
}

// Feature for Add-Task icon
function addTask() {
  const tsAdd = document.querySelector(".ts-add");
  const hpImg = document.querySelector(".hp-mid");

  if (tsAdd) tsAdd.style.display = "flex";
  if (hpImg) hpImg.style.display = "none";
}

// feature for hamburger if user click on save task

function saveTasksl() {
  const hpBody = document.querySelector(".hp");
  const hpImg = document.querySelector(".hp-mid");
  const hpFooter = document.querySelector(".hp-btn");
  const hamBurger = document.getElementById("hamburger");
  const navBar = document.getElementById("navigation");
  const historyFooter = document.getElementById("history-footer");
  const historyHeading = document.getElementById("history-head");
  const navDelete = document.querySelector(".navs");

    // Toggle the cross icon to hamburger
    hamBurger.classList.toggle("cross-icon");

  if (hamBurger.classList.contains("cross-icon")) {
    if (hpImg) hpImg.style.display = "none";
    if (hpFooter) hpFooter.style.display = "none";
    if (hpBody) hpBody.style.background = "#6cb9e5";
    if (historyFooter) historyFooter.style.display = "none";
    if (historyHeading) historyHeading.style.display = "none";
    if (navDelete && navDelete.classList.contains("change-ham")) {
      navDelete.style.display = "flex";
    }

  } else {
    if (hpImg) hpImg.style.display = "none";
    if (hpFooter) hpFooter.style.display = "none";
    if (hpBody) hpBody.style.background = "#6cb9e5";
    if (historyFooter) historyFooter.style.display = "flex";
    if (historyHeading) historyHeading.style.display = "flex";
    if (navBar) navBar.style.background = "#faea58";;
    if (navDelete && navDelete.classList.contains("change-ham")) {
      navDelete.classList.remove("change-ham");
      navDelete.style.display = "transparent";
    }
  }
}

// feature for hamburger if user click on delete task

function deleteTasksl() {
  const dhFooter = document.querySelector(".dh-footer");
  const hpFooter = document.querySelector(".hp-btn");
  const hpImg = document.querySelector(".hp-mid");
  const hpBody = document.querySelector(".hp");
  const hamBurger = document.getElementById("hamburger");
  const navDelete = document.querySelector(".navs");
  const navBar = document.getElementById("navigation");

  // Toggle the cross icon to hamburger
  hamBurger.classList.toggle("cross-icon");

  if (hamBurger.classList.contains("cross-icon")) {
    if (dhFooter) dhFooter.style.display = "none";
    if (hpFooter) hpFooter.style.display = "none";
    if (hpImg) hpImg.style.display = "none";
    if (hpBody) hpBody.style.background = "#6cb9e5";
    if (navDelete && navDelete.classList.contains("change-ham")) {
      navDelete.style.display = "flex";
    }
  }
  else {
    if (dhFooter) dhFooter.style.display = "block";
    if (hpFooter) hpFooter.style.display = "none";
    if (navBar) navBar.style.background = "#faea58";
    if (hpImg) hpImg.style.display = "none";
    if (hpBody) hpBody.style.background = "#6cb9e5";
    if (navDelete && navDelete.classList.contains("change-ham")) {
      navDelete.classList.remove("change-ham");
      navDelete.style.display = "transparent";
    }
  }
}

function createTask() {
  let tsaddHide = document.getElementById("tsadd-hide");
  const hpFooter = document.querySelector(".hp-btn");
  const taskIcon = document.getElementById("task-icon");
  const taskHeading = document.getElementById("ts-text");
  const taskDescription = document.getElementById("ts-des");

  if (tsaddHide) tsaddHide.classList.add("slide-down");
  if (hpFooter) hpFooter.style.display = "none";
  if (taskIcon) taskIcon.style.display = "flex";


}

// feature to add tasks & show plus icon
function tsIcon() {
  const tsaddHide = document.getElementById("tsadd-hide");

  if (tsaddHide.style.display === "none" || tsaddHide.style.display === "") {
    tsaddHide.style.display = "flex";
    tsaddHide.classList.add("slide-down");
  } else {
    tsaddHide.classList.remove("slide-down");
  }
}

// Delete checked marks tasks

function allDelete(){
  const Nores = document.getElementById("noRes");
  const hpBody = document.querySelector(".hp");

  Nores.style.display = "flex";
  hpBody.style.background ="#fff";
}

//
/* <div id="toDo">
<input type="radio" name="checkmark" id="ch-mark">
<div class="task-info">
  <p id="ps-head">Homework</p>
  <p id="ps-des">Do work till 8:00 p.m.</p>
</div>
</div> */