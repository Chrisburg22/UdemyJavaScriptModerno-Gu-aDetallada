//ESTAS CON 4 FORMAS DE DECLARAR FUNCIONES
function saludar( nombre ){//FUNCION SALUDAR
    console.log( arguments );//argument lo utilizamos si al momento de llamar la funcion hay argumentos que no se definin en la funcion podamos trabajar con ellos
    console.log(`Hola ${nombre}`);
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


