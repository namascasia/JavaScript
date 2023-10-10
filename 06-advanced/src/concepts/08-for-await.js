import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
    const id = '5d86371f1efebc31def272e2';
    const heroIds = heroes.map( hero => hero.id);

    const heroPromises = getHeroesAsync (heroIds);

    //Recorre cada uno de ellos pero espera a que todas las promesas se resuelvan
    for await ( const hero of heroPromises){
        element.innerHTML += `${ hero.name } <br/>`
    } 
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}