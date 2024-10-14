
// Feature for Add-Task icon
function addTask() {
  const TaskModal = document.querySelector(".task-modal");
  const hpFooter = document.querySelector(".hp-btn");

  if (TaskModal) TaskModal.style.display = "block";
  if (hpFooter) hpFooter.style.display = "none";
}

// Close Modal
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

let data = JSON.parse(localStorage.getItem("tasks")) || [];

let acceptData = () => {
  let taskObj = {
    taskHead: taskHead.value,
    taskDes: taskDes.value,
  };

  // If editing a task, update the task instead of adding a new one
  if (editIndex !== -1) {
    data[editIndex] = taskObj;
    editIndex = -1; // Reset edit index after updating
  } else {
    data.push(taskObj);
  }

  localStorage.setItem("tasks", JSON.stringify(data));
  createTask();
};

let createTask = () => {
  taskContainer.innerHTML = ""; // Clear container before rendering
  data.forEach((task, index) => {
    taskContainer.innerHTML += `
      <div class="task">
        <p class="headTxt">${task.taskHead}</p>
        <p class="desTxt">${task.taskDes}</p>
        <div class="Btn">
          <button class="edit" onclick="editTask(${index})" id="editBtn">Edit</button>
          <button class="delete" onclick="deleteTask(${index})" id="deleteBtn">Delete</button>
        </div>
      </div>`;
  });

  // Clear input fields
  resetForm();
  closeBtn();
};

let deleteTask = (index) => {
  data.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(data));
  createTask(); // Re-render tasks after deletion
};

let editIndex = -1;

let editTask = (index) => {
  let selectedTask = data[index];

  taskHead.value = selectedTask.taskHead;
  taskDes.value = selectedTask.taskDes;
  editIndex = index; // Set the index for the task being edited

  // Show the task modal for editing
  const TaskModal = document.querySelector(".task-modal");
  const hpFooter = document.querySelector(".hp-btn");

  if (TaskModal) TaskModal.style.display = "block";
  if (hpFooter) hpFooter.style.display = "none";
};

let resetForm = () => {
  taskHead.value = "";
  taskDes.value = "";
};

// Immediately load saved tasks from localStorage on page load
(() => {
  createTask();
})();
