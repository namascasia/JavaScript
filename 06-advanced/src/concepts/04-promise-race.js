/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) =>{

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) =>{
        element.innerHTML = value;
    }
    Promise.race([ //Manda un arreglo de promesas y nos devuelve el resultado de la que se ejecutó más rápido
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])
    .then( renderValue );
}

const slowPromise = () => new Promise( resolve => { //funcion que regresa una promesa
    setTimeout( () => {
        resolve('Slow Promise'); 
    }, 2000);
});

const mediumPromise = () => new Promise( resolve => { //funcion que regresa una promesa
    setTimeout( () => {
        resolve('Medium Promise'); 
    }, 1500);
});

const fastPromise = () => new Promise( resolve => { //funcion que regresa una promesa
    setTimeout( () => {
        resolve('Fast Promise'); 
    }, 1000);
});