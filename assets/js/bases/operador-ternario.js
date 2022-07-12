/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a unsitio web, para consultar si esta abirto hoy . . . .
const dia = 0 ; // Domingo
const horaActual = 10 ;

let horaApertura;
let mensaje; // Esta abierto, Ésta cerrado, hoy abrimos a las XX

//if( dia === 0 || dia === 6 ){
//    if( [0,6].includes( dia ) ){
//    console.log('Fin de semana');
//    horaApertura = 9;
//} else {
//    console.log('Dia de la semana');
//    horaApertura = 11;
//}
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

//if( horaActual >= horaApertura ){
//    mensaje = 'Esta abierto';
//} else {
//    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
//}

mensaje = (horaActual >= horaApertura ) ? 'Está Abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;
console.log( {horaApertura, mensaje} );


