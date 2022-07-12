let a = 5 ;

if ( a >= 10 ){
    console.log(`A es mayor a 10`);
} else {
    console.log(`A es menor a10`)
}

//console.log(`Fin del Programa`);

const hoy = new Date();//El date sirve para crear nuevas instancias
let dia = hoy.getDay(); // 0: Domingo, 1:Lunes, 2:MArtes, etc

console.log( {dia} );

if ( dia === 0 ){
    console.log(`Hoy es domingo`);
} else if ( dia === 1 ){
    console.log(`Hoy es lunes`);
} else if ( dia === 2 ){
    console.log(`Hoy es martes`);
}

//PODEMOS HACER CON MISMO QUE CON EL IF-ELSE CON ARREGLOS O UN OBJETO. ESTA ES UNA VENTAJA YA QUE NO LOS NECESITAMOS TODO EL TIEMPO SABIENDO UTILIZAR LOS RECURSOS NECESARIOS
dia = 2;
//Objeto
const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log( diaLetras[dia] || 'Dia no defindo');

//Array
const diaLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log( diaLetras2[ dia ]);