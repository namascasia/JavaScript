import {User} from '../models/user';
import {userModelToLocalhost} from '../mappers/user-to-localhost.mapper';
import { localhostUserToModel } from '../mappers/localhost-user.mapper';

/**
 * @param {Like<User>} userLike 
 */
export const saveUser = async( userLike ) => {

    const user = new User ( userLike );
    if( !user.firstName || !user.lastName ) 
        throw 'First & last name are required';
    
    const userToSave = userModelToLocalhost(user);//Mapper
    let userUpdated;

    if( user.id ){
        userUpdated = await updatedUser(userToSave);
    }else{
        userUpdated = await createUser( userToSave );
    }
    return localhostUserToModel( userUpdated );
}

/**
 * @param {Like<User>} user 
 */
const createUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const rest = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await rest.json(); //si todo sale bien es mi nuevo usuario
    return newUser;
}//Se hace un POST del user al backend, se envia la url por el fetch
//se espera la respuesta y en ella mandamos el url y las especificaciones.

/**
 * @param {Like<User>} user 
 */
export const updatedUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${user.id}`;
    const rest = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updatedUser = await rest.json(); 
    return updatedUser;
}