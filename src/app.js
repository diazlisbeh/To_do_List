//constats declaration
const addTaskButton = document.getElementById("addTaskButton")
const seccion = document.querySelector(".seccion")
const task = document.querySelector(".task")
const titleTask = document.querySelector(".task-container__Title")

//Variables for the nodeList of deletes bottons
let deleteTaskButton = document.querySelectorAll(".task-delete")
let lastNode = deleteTaskButton[deleteTaskButton.length - 1]

//Details Container and button
let detailsContainer = document.querySelectorAll("#details-container")
let lastDetailsNode = detailsContainer[detailsContainer.length - 1]

let taskDetailsButton = document.querySelectorAll(".task-details__button")
let lastDetailsButtonNode = detailsContainer[detailsContainer.length - 1]

addTaskButton.addEventListener("click", addTask = ()=>{
  
  let node = document.createElement("div")
  node.appendChild(task.cloneNode(task))
  node.children[0].children[0].children[1].textContent = "Title of the task"
  node.children[0].children[0].children[0].checked = false
  
  seccion.appendChild(node)
  
  //Adding event listening for each delete button
  deleteTaskButton = document.querySelectorAll(".task-delete")
  lastNode = deleteTaskButton[deleteTaskButton.length - 1]
  lastNode.addEventListener("click", deleteTask)

  //Adding envent listening for each details button
  taskDetailsButton = document.querySelectorAll(".task-details__button")
  lastDetailsButtonNode = taskDetailsButton[taskDetailsButton.length - 1]
  lastDetailsButtonNode.addEventListener("click", showDetails)


  detailsContainer = document.querySelectorAll("#details-container")
  lastDetailsNode = detailsContainer[detailsContainer.length - 1]
  
console.log(window.localStorage.setItem('todo', JSON.stringify(task)))
  console.log(window.localStorage)

})

function deleteTask(e){
  e.path[3].remove()
}



function showDetails (e){
 console.log(e.path[3].children[2].classList.toggle('display')) 
  console.log(e)
  
}


console.log(window.localStorage.setItem('todo', JSON.stringify(task)))
console.log(window.localStorage)





