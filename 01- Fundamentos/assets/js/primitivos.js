
let nombre = 'Peter parker'; 
console.log( nombre );

nombre = 'Ben Parker';
console.log( nombre );

console.log( typeof nombre );

nombre=123;
console.log( typeof nombre );

let esMarvel = true;
console.log( typeof esMarvel );

let edad = 23;
console.log( typeof edad ); 

let superPoder;
console.log( typeof superPoder ); // undefined 

let soyNull = null;
console.log( typeof soyNull ); // Null primitivo 

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 );

console.log ( symbol1 === symbol2 ); //diferentes aunque tengan el mismo valor 
