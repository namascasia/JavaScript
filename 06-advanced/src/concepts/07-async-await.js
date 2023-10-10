/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async( element ) =>{
    
    console.time('Start');
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]); //Todas las promesas se disparan de manera simultanea y el promise.all espera que todas se marquen como resultas
    //se obtienen las respuestas en un arreglo, se desestructura el arreglo y se muestran.
    element.innerHTML = `
        value1: ${ value1 } <br/>
        value2: ${ value2 } <br/>
        value3: ${ value3 } <br/> 
    `
    console.timeEnd('Start');
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