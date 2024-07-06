// hamburger icon working

function onClickHamburger() {
  document.getElementById("hamburger").classList.toggle("cross-icon");
  document.getElementById("nav").classList.toggle("change-ham");
  const hamBurger = document.getElementById("hamburger");
  const navBar = document.getElementById("navigation");
  const hpFooter = document.querySelector(".hp-btn");

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
  let TaskModal = document.querySelector(".task-modal");
  const hpFooter = document.querySelector(".hp-btn");

  TaskModal.style.display = "none";
  hpFooter.style.display = "flex";

}

// Function to create a new task
let form = document.getElementById("form");
let taskContainer = document.getElementById("taskContainer");
let taskHead = document.getElementById("ts-text");
let taskDes = document.getElementById("ts-des");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  formValidation();
});

let formValidation = () => {
  if (taskHead.value === "" || taskDes.value === "") {
    alert("Please fill in all the fields");
  } else {
    console.log("Task Created");
    acceptData();
  }
};

let data = [];

let acceptData =() =>{
  data.push({
    taskHead: taskHead.value,
    taskDes: taskDes.value,
  });

  localStorage.setItem("task", JSON.stringify(data));

  console.log(data);
  createTask();
};

let createTask = () =>{
  taskDes.innerHTML = "";
  data.map((x,y) => {
    return taskContainer.innerHTML += `<div class="task">
    <p class ="headTxt">${x.taskHead}</p>
    <p class ="desTxt">${x.taskDes}</p>
    <div class="Btn">
    <button class="edit" onclick="editTask(this)" id = "editBtn">Edit</button>
    <button class="delete" onclick="deleteTask(this)" id = "deleteBtn">Delete</button>
    </div>
    </div>`;
  });

  // Clear input fields
  resetForm();
  closeBtn();
  };

  let deleteTask = (e) =>{
    e.parentElement.parentElement.remove();
    data.splice(e,1);
    localStorage.setItem("task", JSON.stringify(data));
  };
  
  let editTask = (e) => {
    let selectedTask = e.parentNode.parentNode;
  
    taskHead.value = selectedTask.children[0].innerText;
    taskDes.value = selectedTask.children[1].innerText;
  
    // Show the task modal for editing
    const TaskModal = document.querySelector(".task-modal");
    const hpFooter = document.querySelector(".hp-btn");
  
    if (TaskModal) TaskModal.style.display = "block";
    if (hpFooter) hpFooter.style.display = "none";
  };

  let resetForm = () =>{
    taskHead.value = "";
    taskDes.value = "";
  };

  (() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
console.log(data);
    createTask();
  })();
