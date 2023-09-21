import html from './app.html?raw'; //raw pasar en crudo la importanción 
/**
 * Redenrizar la aplicacion
 * @param {String} elementId 
 */
export const App = (elementId) => {
    //Cuando la App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html; //{{ name }} otra manera de renderizar
        document.querySelector(elementId).append( app );
    })();
}