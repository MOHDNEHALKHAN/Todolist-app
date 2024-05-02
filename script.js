// hamburger icon working

function onClickHamburger() {
  document.getElementById("hamburger").classList.toggle("cross-icon");
  document.getElementById("nav").classList.toggle("change-ham");
  const hamBurger = document.getElementById("hamburger");
  const navBar = document.getElementById("navigation");
  const hpFooter = document.querySelector(".hp-btn");
  const tsAdd = document.querySelector(".ts-add");
  const hpBody = document.querySelector(".hp");
  const taskContainerDiv = document.getElementById("taskContainer");

  if (hamBurger.classList.contains("cross-icon")) {
    // Hamburger is now a cross, hide elements and set transparent background
    if (hpFooter) hpFooter.style.display = "none";
    if (navBar) navBar.style.background = "none";
  } else {
    // Hamburger is back, show elements and set yellow background
    if (hpFooter) hpFooter.style.display = "flex";
    if (navBar) navBar.style.background = "#faea58";
  }
}

// Feature for Add-Task icon
function addTask() {
  const TaskModal = document.querySelector(".task-modal");
  const hpFooter = document.querySelector(".hp-btn");

  if (TaskModal) TaskModal.style.display = "block";
  if (hpFooter) hpFooter.style.display = "none";
}

//Close Modal
function closeBtn() {
  const closeBtn = document.getElementById("close-btn");
  let TaskModal = document.querySelector(".task-modal");
  const hpFooter = document.querySelector(".hp-btn");

  TaskModal.style.display = "none";
  hpFooter.style.display = "flex";
  // Clear input fields
  document.getElementById("ts-text").value = "";
  document.getElementById("ts-des").value = "";
}

// Function to create a new task
function createTask() {
  const taskText = document.getElementById("ts-text").value;
  const taskDes = document.getElementById("ts-des").value;

  if (taskText) {
    let task = document.createElement("div");
    task.setAttribute("id", "toDo");
    task.innerHTML = `
    <div class = "taskInfo">
    <p class ="headTxt">${taskText}</p>
    <p class ="desTxt">${taskDes}</p>
    </div>
    <div class = "Btn">
    <button onclick = "editTask(this.parentNode.parentNode)" id = "editBtn"> Edit </button>
    <button onclick = "deleteTask(this.parentNode.parentNode)"  id = "deleteBtn"> Delete </button>
    </div>
    `;
    const tasksContainer = document.getElementById("taskContainer");
    tasksContainer.appendChild(task);

    // Clear input fields and close modal
    document.getElementById("ts-text").value = "";
    document.getElementById("ts-des").value = "";
     // Close the modal
     closeBtn();

    return task;
  } 
  else 
  {
    alert("Write something");
  }
}

//Function to remove a task
function deleteTask(task){
  const tasksContainer = document.getElementById("taskContainer");
  tasksContainer.removeChild(task);
  }

// Function to update the task information
function editTask(task) {
  // variables used in the div of a task
  const taskHeading = task.querySelector(".headTxt");
  const taskDescription = task.querySelector(".desTxt");

  // variables used in para elements in the task modal
  const taskText = document.getElementById("ts-text");
  const taskDes = document.getElementById("ts-des");

  // Pre-filling the values of task div in the task modal
  taskText.value = taskHeading.textContent;
  taskDes.value = taskDescription.textContent;

  // Opening the modal
  document.querySelector(".task-modal").style.display = "block";

  // Update button functionality to save edits
  const submitButton = document.getElementById("submit-btn");
  submitButton.onclick = function () {
    const updatedText = taskText.value;
    const updatedDes = taskDes.value;

    // Update task information in the DOM
    taskHeading.textContent = updatedText;
    taskDescription.textContent = updatedDes;

    // Close the modal
    closeBtn();
  };
}