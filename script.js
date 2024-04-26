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
  } 
  else 
  {
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
function closeBtn(){
const closeBtn = document.getElementById("close-btn");
let TaskModal = document.querySelector(".task-modal");
const hpFooter = document.querySelector(".hp-btn");

TaskModal.style.display = "none";
hpFooter.style.display = "flex";
// Clear input fields
document.getElementById('ts-text').value = '';
document.getElementById('ts-des').value = '';
};

// Function to create a new task element
function createTaskElement(text, description) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("toDo");

  const taskHeader = document.createElement("p");
  taskHeader.innerText = text;
  taskHeader.classList.add("task-header");

  const taskDescription = document.createElement("p");
  taskDescription.innerText = description;
  taskDescription.classList.add("task-description");

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("edit-btn");
  editButton.addEventListener("click", () => editTask(taskDiv));

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => removeTask(taskDiv));

  taskDiv.appendChild(taskHeader);
  taskDiv.appendChild(taskDescription);
  taskDiv.appendChild(editButton);
  taskDiv.appendChild(deleteButton);

  return taskDiv;
}

// Function to create a new task
function createTask() {
  const taskText = document.getElementById("ts-text").value;
  const taskDes = document.getElementById("ts-des").value;

  if (taskText) {
    const newTask = createTaskElement(taskText, taskDes);
    const tasksContainer = document.getElementById("taskContainer");
    tasksContainer.appendChild(newTask);

    // Clear input fields and close modal
    document.getElementById("ts-text").value = "";
    document.getElementById("ts-des").value = "";

  }
  else{
    alert("Write something");
  }
}