

let a = 10;
let b = a;
a = 30;

console.log( { a, b });

let juan = { nombre: 'Juan'};
// let ana  = { juan }; Forma de copiar el contenido del objeto creando un objeto que tiene otro objeto con el nombre Ana 
let ana  = { ...juan }; //Separa propiedades y valores de los objetos
ana.nombre = 'Ana';

console.log( { juan, ana });

const cambiaNombre = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony  = cambiaNombre( peter );

console.log( { peter, tony });

//Arreglos 
const frutas = ['Manzana', 'Pera', 'Piña'];

const otrasFrutas = [...frutas]; //Spread un poco más rapido
//const otrasFrutas = frutas.slice(); otra manera 

otrasFrutas.push('Mango');

console.table( { frutas, otrasFrutas } );