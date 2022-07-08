/**
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

//PODEMOS CREAR LA MISMA FUNCION PERO CON LA SINTAXIS DE ARROW FUNCTION
//ALGO IMPORTANTE ES QUE DEBEMOS RETORNAR EL VALOR DENTRO DE LOS PARENTECIS PARA QUE NOS PUEDE RETORNAR NOMBRE Y APELLIDO COMO PROPIEDADES DE UN OBJETO
const crearPersona2 = ( nombre, apellido ) => ({ nombre, apellido });

const persona2 = crearPersona2 ('Alejandro', 'Pérez');
console.log( persona2 );