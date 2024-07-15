// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || [];
// const submitBtn = document.querySelector ("#submit-button");
let formContent = document.querySelector("#content")

// Event listener for form submit button
formContent.addEventListener('submit', handleFormSubmit)

// function to push new task from form to array in local storage
function handleFormSubmit(e){
    e.preventDefault()
  
    let title = document.querySelector('#title').value
    let dueDate = document.querySelector('#dueDate').value
    let description = document.querySelector('#description').value
    let task = {title, dueDate, description}
  
    taskList.push(task)
    localStorage.setItem('tasks', JSON.stringify(taskList))

  }
// let taskId = 

/*
let formContent = document.querySelector("#content")

formContent.addEventListener('submit', handleFormSubmit)

let blogArr = JSON.parse(localStorage.getItem("post")) || []

function handleFormSubmit(event){
  event.preventDefault()

  let username = document.querySelector('#username').value
  let title = document.querySelector('#title').value
  let blog = document.querySelector('#blog').value
  let post = {username, title, blog}

  blogArr.push(post)
  localStorage.setItem('post', JSON.stringify(blogArr))

  redirect()
}

function redirect(){
    window.location.href="./blog.html";
}

*/

// function readProjectsFromStorage(tasks){
//     JSON.parse(localStorage.getItem("tasks")) || []
// }

// function saveProjectToStorage(tasks){
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     console.log(task);
// }

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
