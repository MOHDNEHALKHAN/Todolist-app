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
  const tsAdd = document.querySelector(".ts-add");
  const hpBody = document.querySelector(".hp");
  const taskIcon = document.getElementById("task-icon");
  const taskContainerDiv = document.getElementById("taskContainer");

  if (hamBurger.classList.contains("cross-icon")) {
    // Hamburger is now a cross, hide elements and set transparent background
    if (hpImg) hpImg.style.display = "none";
    if (hpFooter) hpFooter.style.display = "none";
    if (navBar) navBar.style.background = "none";

    //condition for task page
    if (tsAdd && tsAdd.style.display == "flex") {
      if (hpImg) hpImg.style.display = "none";
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
    if (hpImg) hpImg.style.display = "flex";
    if (hpFooter) hpFooter.style.display = "flex";
    if (navBar) navBar.style.background = "#faea58";

    //condition for task page
    if (tsAdd && tsAdd.style.display == "none") {
      if (hpFooter) hpFooter.style.display == "flex";
      if (hpImg) hpImg.style.display = "none";
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

// Feature for Add-Task icon
function addTask() {
  const tsAdd = document.querySelector(".ts-add");
  const hpImg = document.querySelector(".hp-mid");
  const hpFooter = document.querySelector(".hp-btn");

  if (tsAdd) tsAdd.style.display = "flex";
  if (hpImg) hpImg.style.display = "none";
  if (hpFooter) hpFooter.style.display = "none";
}

function createTask() {
  let tsaddHide = document.getElementById("tsadd-hide");
  const hpFooter = document.querySelector(".hp-btn");
  const taskIcon = document.getElementById("task-icon");
  let taskHeading = document.getElementById("ts-text").value;
  let taskDescription = document.getElementById("ts-des").value;
  const taskContainerDiv = document.getElementById("taskContainer");

  if (tsaddHide) tsaddHide.classList.add("slide-down");
  if (hpFooter) hpFooter.style.display = "none";
  if (taskIcon) taskIcon.style.display = "flex";

  if (taskHeading.trim() !== "") {
    // Retrieve existing tasks from local storage
    let taskContainer = JSON.parse(localStorage.getItem("taskContainer")) || [];

    //created an object to store that values of a task in it
    const taskInformation = {
      heading: taskHeading,
      description: taskDescription,
    };
    // storing the values of tasks in an array container
    taskContainer.push(taskInformation);

    // Save the updated task array to local storage
    localStorage.setItem("taskContainer", JSON.stringify(taskContainer));

    //remove the input values to null after successfully saving the task details
    document.getElementById("ts-text").value = "";
    document.getElementById("ts-des").value = "";

    // display it in a new div that should be in taskcontainer id
    let taskDiv = document.createElement("div");

    taskDiv.innerHTML = `<input type="radio" name="checkmark" id="ch-mark">
   <div class="task-info">
   <p id="ps-head">${taskHeading}</p>
   <p id="ps-des">${taskDescription}</p>
   </div>
   <div class= "editBtn_div">
   <button class ="editBtn" onclick="editTask(${taskContainer.length - 1})">Edit</button>
   </div>`;
    taskDiv.id = "toDo";
    taskContainerDiv.style.display = "flex";
    taskContainerDiv.appendChild(taskDiv);
  }
}

// feature to add tasks & show plus icon
function tsIcon() {
  const tsaddHide = document.getElementById("tsadd-hide");
  const taskIcon = document.getElementById("task-icon");

  if (tsaddHide.style.display === "none" || tsaddHide.style.display === "") {
    tsaddHide.style.display = "flex";
    tsaddHide.classList.add("slide-down");
  } else {
    tsaddHide.classList.remove("slide-down");
    taskIcon.style.display = "none";
  }
}
