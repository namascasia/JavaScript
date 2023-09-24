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
        new Todo('Hola Rafaela'),
        new Todo('Hola Guadalupe'),
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
 * Obtener los todos 
 * @param {String} filter 
 */
const getTodos = ( filter = Filters.All ) => {
    switch( filter ){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Option ${ filter } is not valid.`);
    }
}
/**
 * Agrega un todo
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if( !description ) throw new Error('Description is requiered');
    state.todos.push( new Todo( description ) );
}
/**
 * Marca estado de terminado o pendiente
 * @param {String} todoId identified
 */
const toggleTodo = ( todoId ) => {

    state.todos = state.todos.map( todo => {
        if( todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo; //regresar la instancia
    });
}
/**
 * elimina un todo
 * @param {String} todoId identified 
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
}

/**
 * Cambia el estado del filter
 * @param {Filters} newFilter  
 */
const setFilter = ( newFilter = Filters.All ) => {
    // Object.keys(Filters).includes(newFilter);
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
} 

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
