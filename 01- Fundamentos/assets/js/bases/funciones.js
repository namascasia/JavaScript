
function saludar( nombre ){
    console.log( arguments );
    console.log('Hola ' + nombre);
    return 1;
} //Asignacion no recomendada por que su valor puede cambiar, causa problemas con var. let y const dice marca ya declarada.

const saludar2 = function( nombre ){
  console.log('Hola ' + nombre);
} //Asegura que la funcion no cambie de valor.

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre )  => {
    console.log('Hola Flecha' + nombre);
}//si la funcion lleva argumentos se puede quitar los ().

//const retornoDeSaludar = saludar('America', 20, false, 'Mexico');
//console.log(retornoDeSaludar);

//saludar2('America');
//saludarFlecha();
//saludarFlecha2('America');

function sumar ( a, b ){
    return a + b;
}

console.log( sumar(1,2));

const sumar2 = (a,b) => a + b;

function getAleatorio () {
    return Math.random();
}

//En una función de flecha, que no tenga llaves { }
// getAleatorio2()
const getAleatorio2 = () => Math.random();

console.log( getAleatorio2 );