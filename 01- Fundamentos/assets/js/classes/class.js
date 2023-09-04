//Clases incio de mayusculas, no retorna undefined
//Todas las clases son use strict por default

class Persona { 

    static _conteo = 0; 
    static get conteo(){ //static permite declarar propiedades que pertenecen solo a la clase y no a sus instancias.
        return Persona._conteo + ' instancias';
    }
    static mensaje(){
        console.log( this.nombre); //undefined
        console.log('Metodo statico');
    }

//inicializando propiedades de clases. Opcional
    nombre = '';
    codigo = '';
    frase = ''; 
    comida = '';

    constructor (nombre, codigo, frase){//se pueden inicializar valores que despues tendrian que ser llenados
        if(!nombre) throw Error('Ingrese el nombre');//Se muestra error par que no permita crear un objeto sin los atributos de la clase
        if(!codigo) throw Error('Ingrese el codigo');
        if(!frase) throw Error('Ingrese el frase');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    //sets y gets
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return this.comida;
    }

    //Metodos disponibles para las instancias
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    mifrase(){
        this.quienSoy();//referenciar un metodo dentro de otro. Importante el THIS
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

//instancias
const spiderman = new Persona('Peter Parker', 'Spiderman', 'Aloha');
const ironman = new Persona('Tony Stark', 'Ironman', 'Filantropo');

//pruebas
spiderman.mifrase();
// ironman.mifrase(); 
spiderman.setComidaFavorita = 'Chilaquiles';
console.log(spiderman.getComidaFavorita);

// spiderman.nemesis = 'El duende verde'; aun cuando no este en constructor o inicializado aparece como propiedad solo de spiderman, no de las demas instancias
// spiderman.comida = 'Otro cambio' la propiedad no es privada entonces puede suceder.

console.log( 'Conteo statico', Persona._conteo );
console.log( Persona.conteo);
console.log(spiderman._conteo); //marca undefined pq no pertenece a los atributos de la instancias si no de la clase en este caso Persona.
Persona.mensaje();
//se pueden hacer propiedades staticas externas pero no son recomendables. No utilizar
Persona.propiedadExterna = 'cabello rubio'; 
