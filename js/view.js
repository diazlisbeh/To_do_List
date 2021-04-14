export default class View {
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        const boton = document.getElementById('add');
        boton.onclick = () => {
            this.addTodo('Titulo', 'Desc');
        }
    }
    setModel(model) {
        this.model = model;
    }
    addTodo(title, descripcion){
        this.model = addTodo(title,descripcion)
    }
}