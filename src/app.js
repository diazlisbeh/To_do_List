//constats declaration
const addTaskButton = document.getElementById("addTaskButton")
const seccion = document.querySelector(".seccion")
const task = document.querySelector(".task")
const titleTask = document.querySelector(".task-container__Title")

//Variables for the nodeList of deletes bottons
let deleteTaskButton = document.querySelectorAll(".task-delete")
let lastNode = deleteTaskButton[deleteTaskButton.length - 1]


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

})

function deleteTask(e){
  e.path[3].remove()
}

