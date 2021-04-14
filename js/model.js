export default class Model {
    constructor(){
        this.view = null;
        this.todos = [];
    }

    setView(view){
        this.view = view;

    }
    getTodos(){
        return this.todos;
    }
    addTodo(title,descripcion){
        console.log(title,descripcion)
    }
}