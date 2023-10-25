import usersStore from '../../store/users-store';
import { showModal } from '../render-modal/render-modal';
import {deleteUserById} from '../../use-cases/delete-user-by-id';
import './render-table.css';

let table;

const createTable = () => {
    
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
        <tr>
            <th> #ID </th>
            <th> Balance </th>
            <th> FirstName </th>
            <th> LastName </th>
            <th> Active </th>
            <th> Actions </th>
        </tr>    
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeader, tableBody);
    return table;
}

/**
 * @param {MouseEvent} event 
 */
const tableSelectListenner = (event) => {
    const element = event.target.closest('.select-user'); //Manda solo el target del elemento que tenga esa clase si sr le hace click. Los demas son null.
    if( !element ) return;

    const id = element.getAttribute('data-id');//si existe el elemento obtenemos el id mediante el getAttribute
    showModal(id);
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableDeleteListenner = async(event) => {
    const element = event.target.closest('.delete-user'); //Manda solo el target del elemento que tenga esa clase si sr le hace click. Los demas son null.
    if( !element ) return;

    const id = element.getAttribute('data-id');//si existe el elemento obtenemos el id mediante el getAttribute
    
    try{
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        renderTable();

    }catch(error){
        console.log(error);
        alert('No se pudo eliminar');
    }
}

/**

 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {

    const users = usersStore.getUsers();

    if( !table ){
        table = createTable();
        element.append( table );

        table.addEventListener('click', tableSelectListenner);
        table.addEventListener('click', tableDeleteListenner);
    }

    let tableHTML = '';
    users.forEach( user => {
        tableHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName} </td>
                <td>${user.lastName} </td>
                <td>${user.isActive} </td>
                <td> 
                    <a href="#/" class="select-user" data-id="${ user.id }"> Select </a>
                    |
                    <a href="#/" class="delete-user" data-id="${ user.id }"> Delete </a>
                </td>
            </tr>
        `
    });

    table.querySelector('tbody').innerHTML = tableHTML;
}
