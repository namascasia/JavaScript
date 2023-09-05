
class Persona {

    static manejoObjetos({nombre, apellido, pais}){ //recibir un objeto para destructurarlo al formato que pide el constructor
        return new Persona(nombre, apellido, pais);
    }
    constructor (nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getInfo (){
        console.log(`info ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'America',
    apellido1 = 'Flores',
    pais1 = 'México';
    
const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}
const persona1 = new Persona (nombre1, apellido1, pais1);
const persona2 = Persona.manejoObjetos( fher );
persona1.getInfo();
persona2.getInfo();


