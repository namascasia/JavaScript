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
class Heroe extends Persona { //Extends permite adquirir las propiedades, metodos y atributos de Persona (Herencia)
    clan = 'Sin clan'; //Atributo que difiere de persona es agregado en Heroe
    
    constructor (nombre, codigo, frase) {
        super(nombre, codigo, frase); //Llama al constructor de la clase padre
        
        this.clan = 'Los avengers';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}



//instancias
const spiderman = new Heroe('Spiderman', 'Pura doble P', 'que onda');
console.log(spiderman);
spiderman.quienSoy();