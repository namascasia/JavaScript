//Solo ejemplo para aprender, no se usa para lo actual. Plantamiento del problema solamente
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir (){
        console.log(`Nombre: ${this.nombre} -edad: ${this.edad}`);
    }
}
const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir (){
        console.log(`Nombre: ${this.nombre} -edad: ${this.edad}`);
    }
}
const melissa = {
    nombre: 'Melissa',
    edad: 35,
    imprimir (){
        console.log(`Nombre: ${this.nombre} -edad: ${this.edad}`);
    }
}

fher.imprimir();

function Persona (nombre, edad){ //Implementacion de funcion normal con la Mayuscula de inicial es para instanciar. 
    console.log('Se ejecuto la linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function (){
        console.log(`Nombre: ${this.nombre} -edad: ${this.edad}`);
    }
}
const maria = new Persona ('Maria', 18);
const jesus = new Persona('Jesus', 21);
// console.log(maria);
maria.imprimir();