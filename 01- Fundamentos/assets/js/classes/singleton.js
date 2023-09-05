//Unica instancia que siempre regrese la misma instancia de manera global en una clase
//util de bases de datos

class Singleton {

    static instancia; //valor que se va a regresar
    nombre = ''; //propiedad global

    constructor ( nombre = ''){ //lo opuesto de true, un undefined o null lo marca como falso
        if( !!Singleton.instancia ){ //si ya existe regresamos la instancia
            return Singleton.instancia;
        }
        Singleton.instancia = this; //sino existe se asigna
        this.nombre = nombre;
    }
    
}

//Insatancias que apuntan al mismo espacio en memoria en ese momento.
const instancia1 = new Singleton ('Ironman');
const instancia2 = new Singleton ('Spiderman');
const instancia3 = new Singleton ('Black Panther');


console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);
