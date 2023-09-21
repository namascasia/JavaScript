import { Todo } from "../todos/models/todo.model"
//Define el estado global de mi app

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}
const state = {
    todos: [
        new Todo('Hola Aleman'),
        new Todo('Hola Admin'),
        new Todo('Hola Ramses'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore :)'); 
}

export default {
    initStore,
}
