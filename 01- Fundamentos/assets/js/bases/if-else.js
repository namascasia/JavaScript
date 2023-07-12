
let a = 15;

if ( a >= 10 ) { //undefines, null, una asignacion
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay(); //0 domingo....

console.log({ dia });

if( dia === 0 ) {
    console.log('Hoy es domingo');
} else if ( dia === 1 ) {
    console.log('Lunes');

} else if ( dia === 2 ) {
    console.log('Martes');

} else {
    console.log('Hoy no es domingo, lunes o martes');

}

//Sin usar If Else, o Switch, únicamente objetos
dia = 3;

//objetos 
const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}
const diasLetrasFlecha = {
    0: () => 'domingo - 0',
    1: () => 'lunes - 1',
    2: () => 'martes - 2',
    3: () => 'miercoles - 3',
    4: () => 'jueves - 4',
    5: () => 'viernes - 5',
    6: () => 'sabado - 6',
}

//Arrays
const Dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado',];
 console.log(Dias[dia]);

//día de la semana
console.log( diasLetrasFlecha[dia] () || 'Dia no definido');

//HOOLAAAAAA 


