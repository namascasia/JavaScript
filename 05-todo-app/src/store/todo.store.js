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


const loadStore = () => {
    throw new Error('Not implemented');
}

/**
 * Agrega un todo
 * @param {String} description 
 */
const addTodo = ( description ) => {
    throw new Error('Not implemented');
}
/**
 * Marca estado de terminado o pendiente
 * @param {String} todoId identified
 */
const toggleTodo = ( todoId ) => {
    throw new Error('Not implemented');
}
/**
 * elimina un todo
 * @param {String} todoId identified 
 */
const deleteTodo = ( todoId ) => {
    throw new Error('Not implemented');
}

const deleteCompleted = () => {
    throw new Error('Not implemented');
}

/**
 * Cambia el estado del filter
 * @param {String} newFilter  
 */
const setFilter = ( newFilter = Filters.All ) => {
    throw new Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');
} 

export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
