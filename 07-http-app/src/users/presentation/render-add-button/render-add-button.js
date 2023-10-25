import { renderModal, showModal } from '../render-modal/render-modal';
import './render-add-button.css';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = ( element ) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append( fabButton );

    //TODO:implementar fabButton
    fabButton.addEventListener('click', ()=>{
        showModal();
    });
    
}