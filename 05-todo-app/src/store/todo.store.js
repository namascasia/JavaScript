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
    loadStore();
    console.log('InitStore :)'); 
}


const loadStore = () => {
    if( !localStorage.getItem('state')) return;
    
    const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
    state.todos = todos;
    state.filter = filter;
}
const saveStateToLocalStorage = () =>{
    localStorage.setItem('state', JSON.stringify(state)); //Obtiene un string de todo el state para manternelo en la pagina aun cuando se recargue
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
    saveStateToLocalStorage();
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
    saveStateToLocalStorage();
}
/**
 * elimina un todo
 * @param {String} todoId identified 
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done );
    saveStateToLocalStorage();
}

/**
 * Cambia el estado del filter
 * @param {Filters} newFilter  
 */
const setFilter = ( newFilter = Filters.All ) => {
    // Object.keys(Filters).includes(newFilter);
    state.filter = newFilter;
    saveStateToLocalStorage();
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
