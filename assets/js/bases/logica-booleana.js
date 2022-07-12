const regresaTrue = ( ) => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = ( ) => {
    console.log('Regresa False');
    return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.warn(`El operador booleano untilizado es el de negación " ! "`);
console.log( true );
console.log( !true );
console.log( !false );
console.log( !regresaFalse() );

console.warn(`El operador utilizado es el And " && "`);
console.log( true && true );
console.log( true && !false);
console.log( false && true );

console.log('=====================================');
console.log( regresaFalse() && regresaTrue() );//Cuando en primer parametro es false el operador 'AND' entiende que ya no es necesario correr toda esa linea de código por que ya sabe que el retorno el falso
console.log( regresaTrue && regresaFalse() );

console.log('=====================================');
regresaFalse() && regresaTrue();
regresaTrue() && regresaFalse();

console.log( `4 Operadores And`, true && true && true && false );
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn(`El operador utilizado es el OR " | | "`);
console.log( true || true );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );
console.log( `4 Operadores Or`, true || true || true || false );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 console.warn('Asignaciones con booleanos');

 const soyUndefined = undefined;
 const soyFalse = false;
 const soyNull = null;

 const a1 = false && 'Hola mundo' && 150; //150
 const a2 = 'Hola' && 'Mundo' && true && false;//false
 const a3 = soyFalse || 'Ya no soy falso'; //Ya no soy falso
 const a4 = soyFalse || soyNull || soyUndefined || 'Ya no soy null, ni false y menos undefined' || true;
 const a5 = soyFalse || soyNull || regresaFalse() || regresaTrue() || 'Ya nos soy false nunca más';

 console.log( {a1, a2, a3, a4, a5} );

 //Ejempo de como es utilizada los operadores booleanos para estructuras de control
 if( regresaFalse() && regresaTrue() && ( true || false || true ) ){
    console.log('Hacer algo');
 } else {
    console.log('Hacer otra cosa');
 }