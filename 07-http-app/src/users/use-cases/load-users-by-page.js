import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import {User} from '../models/user'; 

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async( page = 1) => {
    
    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`; //base de la url para la pagina y peedir la petición de data
    const res = await fetch(url); // res hace un fetch de API. Método global que recupera recursos de forma asíncrona en toda la red.
    const data = await res.json(); //Recibo respuesta de API y tomo el .json de mi res para conformar mi data. 

    const users = data.map( localhostUserToModel );
    return users;
}