import View from './view.js'
import Model from './model.js'



const model = new Model();
const view = new View();
model.setView(view);
view.setModel(model);