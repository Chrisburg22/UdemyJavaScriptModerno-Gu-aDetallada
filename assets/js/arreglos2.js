let juegos = [ 'Zelda', 'Mario', 'Metroid', 'Kirby'];
console.log(`Largo: ${juegos.length}`);
  
let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log( {primero, ultimo});
//Recorre el arreglos y muestra en console el elemento el indice en donde esta y el leght del arreglo al que pertenece
juegos.forEach ( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );
//Agrega un elemento al final del Array
let nuevaLongitud = juegos.push('Pokemon');
console.log({nuevaLongitud, juegos});
console.log(juegos);
//Agrega un elemento al incio del array
nuevaLongitud = juegos.unshift('Fifa');
console.log({nuevaLongitud, juegos});
console.log(juegos);
//Borra el ultimo elemento del array y lo retorna
 let juegoEliminado = juegos.pop();
 console.log({juegoEliminado, juegos});
 console.log(juegos);
//Borra varios elementos, indicandole de donde empieza y cuantos elementos borrara, los cuales son retornados
 let pos = 1;
 let juegosEliminados = juegos.splice(pos, 2);
 console.log({juegoEliminado, juegos});
 console.log(juegos);
 //Nos ayuda a saber cual es el index de in elemento. Es CaseSensitive
 let metroidIndex = juegos.indexOf('Kirby');
 console.log({metroidIndex});

