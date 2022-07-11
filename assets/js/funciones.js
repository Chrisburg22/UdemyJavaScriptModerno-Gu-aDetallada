//ESTAS CON 4 FORMAS DE DECLARAR FUNCIONES
function saludar( nombre ){//FUNCION SALUDAR
   // console.log( arguments );//argument lo utilizamos si al momento de llamar la funcion hay argumentos que no se definin en la funcion podamos trabajar con ellos
    //console.log(`Hola ${nombre}`);
    return [1,0];
}
saludar('Alejandro', 30, true, 'México');

const saludar2 = function( nombre ){//FUNCION ANONIMA EN UNA CONSTANTE
    console.log(`Hola ${nombre}`);
}
saludar2( 'Christian' );

const saludarFlecha = () => { //DECLARACION DE UN FUNCION DE TIPO FLECHA
    console.log('Hola Flecha');
}
saludarFlecha();

const  saludarFlecha2 = ( nombre ) => {
    console.log(`Hola ${nombre}`);
}
saludarFlecha2('Claudia');

const retornoDeSaludar = saludar('Alejandro', 30, true, 'México');
console.log(retornoDeSaludar);
console.log(retornoDeSaludar[0], retornoDeSaludar[1])

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function sumar( a, b ) {
    return a+b;
}
console.log( sumar( 3,5) );

const sumar2 = ( a, b ) => a+b; 
console.log( sumar2(4,3) );

function getAleatorio( ){
    return Math.random();
}
console.log( getAleatorio() );

const getAleatorio2 = ( ) => Math.random();
console.log( getAleatorio2() );