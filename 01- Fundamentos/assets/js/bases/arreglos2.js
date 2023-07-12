//Propiedades y metodos basicos de arreglos
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( 'Largo:', juegos.length );

let primero = juegos[ 2-2 ];
let ultimo = juegos[ juegos.length - 1 ];

console.log({ primero, ultimo });

juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr }); // repite instruccion por cada item
});

let nuevaLongitud = juegos.push( 'F-Zero' ); // Agregar item al final
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift( 'Valorant' ); // Agregar item al inicio
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop(); // Elimina ultimo item
console.log({ juegoBorrado, juegos });

let pos = 1;

let juegosBorrados = juegos.splice( pos, 2 ); // Elimina de la posicion indicada, hasta cantidad de items a eliminar
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf( 'Metroid' ); // Retorna el indice del item que buscamos
console.log({ metroidIndex }); //si retorna -1 no se encuentra el item


