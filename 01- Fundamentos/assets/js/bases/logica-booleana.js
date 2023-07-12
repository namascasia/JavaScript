const regresaTrue = () => {
    console.log( 'Regresa true' );
    return true;
}

const regresaFalse = () => {
    console.log( 'Regresa False' );
    return false;
}

console.warn( 'Not' );
console.log( true );
console.log( !true );

console.log( !regresaFalse() );

console.warn( 'And' ); //true si todos los valores son verdaderos
console.log( true && true );
console.log( true && false );


console.log('==========');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

regresaFalse() && regresaTrue();

console.warn('OR');
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && ' Hola mundo ' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse; //todas las condiciones tienen que ser true para que salga verdadero :)
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso';
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;

console.log( {a1, a2, a3, a4, a5 } );

if ( regresaFalse() && regresaTrue() && ( true || false || true )) { //no debería haber más de 3 condiciones en un if por optimizacion
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}