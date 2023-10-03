import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) =>{

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';
    
    findHero(id1, (error, hero1) =>{ //Calback Hell
        // element.innerHTML = hero?.name || 'No hay heroe'; Concidiciona si hay hero se busca su nombre.
        if( error ){
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, hero2 ) => {
            if( error ){
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        });
    });
}
/**
 * 
 * @param {String} id 
 * @param {(error : String|null, hero: Object) => void} callback 
 */

const findHero = ( id, callback) => { // función como parametro y esa función lo manda llamar
    
    const hero = heroes.find( hero => hero.id === id );

    if( !hero ){
        callback(`Hero with id ${ id } not found.`); //Manejo de errores con callbacks
        return; // regresae undefined
    }
    callback( null, hero );
}