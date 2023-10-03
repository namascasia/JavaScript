import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) =>{

    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb1';

    findHero( id1 )
    // .then( superHero => renderHero( superHero ));
    .then( renderHero ); //Utilizada cuando tengamos que crear unicamente un argumento que vamos a recibir y mandar a otor metodo, vamos a poner el nombre del metodo unicamente
}
/**
 * 
 * @param {String} id 
 * @returns  {Promise}
 */

const findHero = ( id ) => {
    return new Promise( ( resolve, reject )=> { //Las promesas contienen callbacks
        
        const hero = heroes.find( hero => hero.id === id);
        if( hero ){
            resolve( hero );
            return;
        }
        reject(`Hero with id ${ id } not found`);
    });
}