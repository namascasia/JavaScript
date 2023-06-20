//Declaracion
//const arr = new Array(10); no comun
//const arr = [];

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log( { videoJuegos } );

console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'America',
    1 + 2,
    function(){}, // funcion
    ()=>{}, // funcion flecha
    { a: 1 }, // objeto
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

//console.log( { arregloCosas } );
console.log( arregloCosas[7] [4] [1] ); //Referencia de arreglos 
