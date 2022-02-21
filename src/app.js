const addTaskButton = document.getElementById("addTaskButton")
const deleteTaskButton = document.getElementById("deleteTaskButton")
const seccion = document.querySelector(".seccion")
const task = document.querySelector(".task")

addTaskButton.addEventListener("click", addTask = ()=>{
  
  let node = document.createElement("div")
  node.appendChild(task.cloneNode(task))
//node.children[0].children[0].children[1].value = ""
  seccion.appendChild(node)
//console.log(node.children[0].children[0].children[1].placeholder)
})
