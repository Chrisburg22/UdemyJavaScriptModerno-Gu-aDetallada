const elMayor = ( a, b ) => ( a > b ) ? a : b;
console.log( elMayor(10,33) );

const tieneMembrecia = ( membrecia ) => ( membrecia ) ? '2 Dólares' : '10 Dólares';
console.log( tieneMembrecia (false) );

const amigo = true ;
const amigosArr = [ 'Peter', 'Tony', 'Dr. Strange', amigo ? 'Thor' : 'Loki' ];
console.log( amigosArr );

const nota = 92; // A+ A B+
const grado = nota >= 95 ? 'A+' :
                        nota >= 90 ? 'A' :
                        nota >= 85 ? 'B+' :
                        nota >= 80 ? 'B' :
                        nota >= 75 ? 'C+' :
                        nota >= 70 ? 'C' : 'F';

console.log( {nota, grado} );