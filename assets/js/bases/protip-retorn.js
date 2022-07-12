/**
 * PROTIP 1
 * ASI ES COMO SE HACIA ANTES DEL ECMASCRIPT06
 * function crearPersona( nombre, apellido){
 *     return {
 *          nombre: nombre,
 *          apellido: apellido,       
 *    }
 *  }
 */

//CUANDO LOS PARAMETROS SE LLAMAN IGUAL QUE LAS VARIABLES QUE VAMOS A RETORNOR PODEMOS HACERLO CON LA SIGUIENTE SINTAXIS
 function crearPersona( nombre, apellido){
    return {nombre, apellido}
 }

const persona = crearPersona( 'Christian', 'Ramos');
console.log( persona );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PODEMOS CREAR LA MISMA FUNCION PERO CON LA SINTAXIS DE ARROW FUNCTION
//ALGO IMPORTANTE ES QUE DEBEMOS RETORNAR EL VALOR DENTRO DE LOS PARENTECIS PARA QUE NOS PUEDE RETORNAR NOMBRE Y APELLIDO COMO PROPIEDADES DE UN OBJETO
const crearPersona2 = ( nombre, apellido ) => ({ nombre, apellido });//Los parentesis al final es para desirle a JavaScript que vamos a retornar un objeto

const persona2 = crearPersona2 ('Alejandro', 'Pérez');
console.log( persona2 );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Este tipo de funciones sirve para retornar los argumentos al momento de llamar a la funcion
function imprimeArgumentos (){
   console.log( arguments );
}

imprimeArgumentos( 10, true, false, "Christian", "Hola");
//////////////////////////////////////////////////////////////////////////////////////////////////////

//Es la misma funcion que la anterior pero con la sintaxis de una funcion de flecha. 
//Despues del parametro rest que son los 3 puntos, no puedes otro parametro despues del parametro rest
const imprimeArgumentos2 = ( edad, ...args) => {
   //console.log( {edad, args} );
   return args;
}

imprimeArgumentos2(11, false, true, "Alejandro", "Hola");
///////////////////////////////////////////////////////////////////////////////////////////////////////

//Con esta sintaxis podemos crear unmuevo array con los argumentos que son recividos, lo cuales seran loas valores de las pripiedades que se definen al crear la constante
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(11, false, true, "Alejandro", "Hola");
console.log({casado, vivo, nombre, saludo});

//Podemos hacer lo mismo de arriba con los objetos 
//En este caso primero llamamos a la propiedad que uya esta definida en el objeto, seguido por dos puntos, para despues cambiar el nombre de la propiedad del objeto
const { apellido: nuevoApellido } = crearPersona( 'Claudia', 'Parada');
console.log({ nuevoApellido });

/////////////////////////////////////////////// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DE ESTA MANERA PODEMOS DESESTRUCTURAR UN OBJETO PARA IMPRIMIR SUS VALORES POR SEPARADO DESACIENDO EL OBJETO EN VARIOS OBJETOS

//const imprimePropiedades = ( personaje ) => {
 //  console.log( 'nombre', personaje.name);
//  console.log( 'heroName', personaje.heroName);
 //  console.log( 'vivo', personaje.vivo);
 //  console.log( 'age', personaje.age);
 //  console.log( 'trajes', personaje.trajes);
//
//Esta funcion y lla de arriba es exactamen te los mismo . En este caso podemos agregar un valor por defercto a las pripiedades en caso de que no tenga alguno.
const imprimePropiedades = ( { name, heroName, vivo, age=10, trajes } ) => {
   console.log( {name} );
   console.log( {heroName} );
   console.log( {vivo} );
   console.log( {age} );
   console.log( {trajes} );
}

let tony = {
   name: 'Tony Stark',
   heroName: 'Iron Man',
   vivo: false,
   //age: 40,
   trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

imprimePropiedades( tony );



