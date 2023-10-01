import html from './app.html?raw'; //raw pasar en crudo la importanción 
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
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
    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUl = document.querySelector(ElementIDs.TodoList);

    //Listeners
    newDescriptionInput.addEventListener('keyup', ( event) =>{
        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value);
        displayTodos();
        event.target.value = '';
    }); // cuando se presiona y suelta la tecla

    todoListUl.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]'); 
        todoStore.toggleTodo( element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUl.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]'); 
        if( !element || !isDestroyElement ) return;

        todoStore.deleteTodo( element.getAttribute('data-id'));
        displayTodos();
    });
}

