document.addEventListener('DOMContentLoaded', function(){
    const boton = document.getElementById('add');
    const desp = document.getElementById('description');
    const title = document.getElementById('title');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    let id = 1;

    boton.onclick = addTodo

    function removetoDo(id){
        console.log(id)
        document.getElementById(id).remove()
        
        

    }
     
    function addTodo(){
        const row = table.insertRow();
        if(title.value === '' | desp.value === ''){
            alert.classList.remove('d-none');
            alert.innerText = "Title and description is required"
            return;
        }
       
        alert.classList.add('d-none');
        row.setAttribute( 'id' , id++)
        
        row.innerHTML = `
        <td>${title.value}</td>
        <td>${desp.value}</td>
        <td class="text-center">
            <input type="checkbox">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>
         
        </td>`;


        //boton de borrar
        const removebtn = document.createElement('button');
        removebtn.classList.add('btn', 'btn-primary', 'mb-1','btn-danger') //agregando clases pa que se vea lindo
        removebtn.innerHTML = ' <i class="fa fa-trash"></i>'
        removebtn.onclick = function (e){
            removetoDo(row.getAttribute('id'))
            
            
        }
        row.children[3].appendChild(removebtn); //agregando boton de basura aqui en vez de arriba, por que asi no era :(

    }
    
})