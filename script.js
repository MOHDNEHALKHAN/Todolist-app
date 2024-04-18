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
  const hpFooter = document.querySelector(".hp-btn");
  const tsAdd = document.querySelector(".ts-add");
  const hpBody = document.querySelector(".hp");
  const taskIcon = document.getElementById("task-icon");
  const taskContainerDiv = document.getElementById("taskContainer");

  if (hamBurger.classList.contains("cross-icon")) {
    // Hamburger is now a cross, hide elements and set transparent background
    if (hpFooter) hpFooter.style.display = "none";
    if (navBar) navBar.style.background = "none";

    //condition for task page
    if (tsAdd && tsAdd.style.display == "flex") {
      if (hpFooter) hpFooter.style.display == "none";
      hpFooter.style.display = "none";
      tsAdd.style.display = "none";
    }

    //condition for task page for tsAdd
    if (taskContainerDiv && taskContainerDiv.style.display == "flex") {
      taskContainerDiv.style.display = "none";
      tsAdd.style.display = "none";
    }

    //condition for task page for taskIcon
    if (taskIcon && taskIcon.style.display == "flex") {
      taskIcon.style.display = "none";
      if (taskContainerDiv.style.display == "flex" || taskContainerDiv.style.display == "none" ){
        taskContainerDiv.style.display = "flex";
      }
    }
  } 
  else 
  {
    // Hamburger is back, show elements and set yellow background
    if (hpFooter) hpFooter.style.display = "flex";
    if (navBar) navBar.style.background = "#faea58";

    //condition for task page
    if (tsAdd && tsAdd.style.display == "none") {
      if (hpFooter) hpFooter.style.display == "flex";
      tsAdd.style.display = "flex";
      hpFooter.style.display = "none";
    }

    //condition for task page for tsAdd
    if (taskContainerDiv && taskContainerDiv.style.display == "flex") {
      taskContainerDiv.style.display = "flex";
      tsAdd.style.display = "flex";
    }

    //condition for task page for taskIcon
    if (taskIcon && taskIcon.style.display == "none") {
      if (hpFooter) hpFooter.style.display = "none";
      taskIcon.style.display = "flex";
      if(taskContainerDiv && taskContainerDiv.style.display == "flex"){
        taskContainerDiv.style.display = "flex";
      }
    }
  }
}

// Feature for save icon
function saveTask() {
  const hpBody = document.querySelector(".hp");
  const hpFooter = document.querySelector(".hp-btn");
  const historyHeading = document.getElementById("history-head");

  if (historyHeading) historyHeading.style.display = "flex";
  if (hpFooter) hpFooter.style.display = "none";
  if (hpBody) hpBody.style.background = "#6cb9e5";
}

// Feature for Add-Task icon
function addTask() {
  const TaskModal = document.querySelector(".task-modal");
  const hpFooter = document.querySelector(".hp-btn");

  if (TaskModal) TaskModal.style.display = "block";
  if (hpFooter) hpFooter.style.display = "none";
}

//Close Modal
function closeBtn(){
const closeBtn = document.getElementById("close-btn");
const TaskModal = document.querySelector(".task-modal");
const hpFooter = document.querySelector(".hp-btn");

TaskModal.style.display = "none";
hpFooter.style.display = "flex";
};