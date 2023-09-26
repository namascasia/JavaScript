import html from './app.html?raw'; //raw pasar en crudo la importanción 
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
}

/**
 * Redenrizar la aplicacion
 * @param {String} elementId 
 */
export const App = (elementId) => {

    //Llamada cada vez que quiera re dibujar los Todos
    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(ElementIDs.TodoList, todos);
    }

    //Cuando la App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html; //{{ name }} otra manera de renderizar
        document.querySelector(elementId).append( app );
        displayTodos();
    })();
}