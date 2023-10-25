import modalHTML from './render-modal.html?raw';
import './render-modal.css';
import {User} from '../../models/user';
import { getUserById } from '../../use-cases/get-user-by-id';

let modal, form, loadedUser = {};
/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async(id) => {
    modal?.classList.remove('hide-modal'); //si existe ? remueve la clase.
    loadedUser = {};
    
    if(!id) return;
    const user = await getUserById(id);
    setFormValues(user);
}

export const hideModal = () =>{
    modal?.classList.add('hide-modal');
    form?.reset();
}//cierra el modal añadiendo la clase hide-modal al form

/**
 * @param {User} user 
 */
const setFormValues = ( user ) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;
}
/**
 * @param {HTMLDivElement} element 
 * @param {(userLike)=> Promise<void>} callback
 */
export const renderModal = (element, callback) => {

    if(!callback)
        throw Error('No viene un callback');
    
    if( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if(event.target.className !== 'modal-container') return;
        hideModal();
    }); //Si da click afuera entonces cerramos el modal

    form.addEventListener('submit', async(event) => {
        
        event.preventDefault(); //no agrega nada al URL si guardamos la información
        
        const formData = new FormData(form);
        const userLike = {...loadedUser};
    
        for (const [key, value] of formData ) {
            if( key === 'balance' ){
                userLike[key] = +value;// = + convierte a number el campo value
                continue;
            }    

            if( key === 'isActive' && value ){
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }//el formData regres string. Validacion de que si es on es t sino f
            
            if(!formData.get('isActive')) {
                formData.set('isActive', false); 
                continue;
            }
            userLike[key] = value;
        }
        //TODO: guardar usuario
        await callback( userLike );
        hideModal();
    });

    element.append(modal);
}