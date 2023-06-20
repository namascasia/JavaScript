let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman', 
    vivo: false,
    edad:40,
    coords: {
        lat:34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'End Game',
};
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre'] );
console.log('Edad', personaje['edad'] );

console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

//Tarea: numero de trajes de ironman
console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length -1 ]);

const x = 'vivo';
console.log('Vivo', personaje[x] );

console.log('Ultima pelicula', personaje['ultima-pelicula'] );


//Más detalles 
delete personaje.edad; //eliminar propiedad

personaje.casado = true; //nueva propiedad de objeto para ejecucion

const entriesPares = Object.entries(personaje); //Arreglos de valores por cada propiedad
console.log(entriesPares);

Object.freeze(personaje); //bloquea las propiedades para no ser modificadas o eliminadas pero no a las aginaciones dentro del objeto

personaje.dinero = 100000;
personaje.casado = false;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames (personaje);
const valor = Object.values(personaje);
console.log({propiedades, valor});