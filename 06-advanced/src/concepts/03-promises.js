import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) =>{

    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) =>{
        element.innerHTML = `
        <h3> ${ hero1.name } </h3>
        <h3> ${ hero2.name } </h3>`   
    }

    const renderError = ( error ) =>{
        element.innerHTML =`
        <h1> Error: </h1>
        <h3> ${ error } </h3>`;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    let hero1; //Promise Hell, resultado de promesas en cadena

    //!Forma1 Promise all
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeroes( hero1, hero2 ))
    .catch( renderError );
    //Llama al constructor de las promesas y manda un arreglo de promesas a ejecutar.
    //Recomendado cuando los resultados son independientes. 

    //!Forma 2 cadena de promesas
    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero (id2); //Regresa el resultado de una promesa con el valor que mande. id2
    //     }).then( hero2 => { //Semanticamente correcto. Aquí ya tenemos el valor del hero2 y renderizamos.
    //         renderTwoHeroes( hero1, hero2); 
    //     })
    //     .catch( renderError ); //Puede manejarse un solo catch para los dos
    //Recomendado cuando los resultados son dependientes

    //!Forma 1 promesa dentro de una promesa
    // findHero( id1 )
    // .then( superHero => renderHero( superHero ));
    // .then( renderHero ) //Utilizada cuando tengamos que crear unicamente un argumento que vamos a recibir y mandar a otor metodo, vamos a poner el nombre del metodo unicamente
    // .catch( renderError);
    // .then ( (hero1) => {
    //     findHero( id2 )
    //         .then( hero2 => {
    //             renderTwoHeroes( hero1, hero2); 
    //         })
    // })
    // .catch( renderError);


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