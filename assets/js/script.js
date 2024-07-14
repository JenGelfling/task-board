// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || [];
const submitBtn = document.querySelector ("#submit-button");
let taskId = 

function readProjectsFromStorage(tasks){
    // taskList = localStorage.getItem("tasks");
    // localStorage.getItem(nextId);

    return JSON.parse(localStorage.getItem("tasks")) || []
}

function saveProjectToStorage(tasks){
    localStorage.setItem('tasks', JSON.stringify(taskList));
    console.log(task);
}

// Todo: create a function to generate a unique task id
function generateTaskId(e) {
    e.preventDefault();


}

// Todo: create a function to create a task card
function createTaskCard(taskOb) {
    const cardBlock = document.createElement("div");
    const h2Tag = document.createElement("h2");
    const dueDate = document.createElement("p");
    const contentTag = document.createElement("p");

    h2Tag.textContent = titleInput.value;
    dueDate.textContent = dateInput.value;
    contentTag.textContent = contentInput.value;

    cardBlock.appendChild(h2Tag);
    cardBlock.appendChild(dueDate);
    cardBlock.appendChild(contentTag);

    if (taskOb.status === 'to-do'){
        toDoContainer.appendChild(cardBlock)}
        else if (taskOb.status === 'in-progress'){
        toDoContainer.appendChild(cardBlock)}
        else {
        toDoContainer.appendChild(cardBlock)}
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    existingTasks

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
