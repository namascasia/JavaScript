import {heroes} from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) =>{

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    // console.log('Inicio de componente');

    findHero(id1)  //Ejecutada a destiempo del hilo principal del programa
    .then( name => element.innerHTML = name ) //Manejo del exito
    .catch ( error => element.innerHTML = error) //Manejo de errores
}
/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async(id) => { //Transforma mi funcion para regresar una promesa en lugar de funcion, que resuelve lo que está en el return.
    const hero = heroes.find( hero => hero.id === id);
    if( !hero )
        throw `Hero width id ${ id } not found`;

    return hero.name; //Al return se le toma como un valor de exito en la promesa
}