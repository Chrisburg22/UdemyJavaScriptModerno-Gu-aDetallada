//DIFERENTES MANERAS DE HACER UN ARREGLO
// const arr = new Array(0);
// const arr = [];
//console.log( arr );
let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log( {videoJuegos} );

console.log( videoJuegos[1] );

let arregloCosas = [
    true,
    123,
    'Christian',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    [ 'x', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy', 'Mr. Kinat'
    ]]
];

console.log( arregloCosas[7][2] );
console.log( arregloCosas[7][4][1] ); // LLama al elemento 7 del primer arreglo, como este es un arreglos llamamos al elemento 4 del arreglo