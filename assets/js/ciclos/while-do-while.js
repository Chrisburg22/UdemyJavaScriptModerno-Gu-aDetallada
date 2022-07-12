 const carros = ['Ford', 'Mazda', 'Honda' , 'Toyota'];
let i =0;

// while ( i < carros.length ){
//    console.log( carros[i] );
//   i ++;
// }
console.warn('While');
while ( carros[i] ){// Aqui entrara al ciclo hasta que algun elemento del array sea falso
    if ( i === 1){
        i++;
        continue;
    }
    console.log( carros[i] );
    i++
}

console.warn('Do-While');
let j = 0;
do{
    console.log( carros[j] );
    j++;
} while( carros[j] );//Siermpre que el valor de esa posicion tenga un valor que retorne true el ciclose seguira ejcutando