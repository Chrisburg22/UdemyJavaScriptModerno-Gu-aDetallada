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




//RETOS DE PLATZI HERO

//Esta funcion es para un array y nos retorna solo los string de 4 o mas caracteres
 function retoHero1(array) {
	return array.filter( arr => arr.length >= 4);
}; 
let masDeCuartoLetras = retoHero1(juegos);
console.log(masDeCuartoLetras);
///////////////////////////////////////////////////////////////////////////////////////////////////

//Esta funcion nos es para un array en caso de que su propiedad total sea mayor o igual a 100 y la propiedad delivered sea true
function retoHero2(array) {
	return array.filter((arr) => arr.total >= 100 && arr.delivered === true);
}; 
let personas = [
    {
        name: 'Christian',
        total: 130,
        delivered: true,
    },
    {
        name: 'Juan',
        total: 90,
        delivered: true,
    },
    {
        name: 'Christopher',
        total: 130,
        delivered: false,
    },
    {
        name: 'Ramiro',
        total: 120,
        delivered: true,
    },
    {
        name: 'Sergio',
        total: 230,
        delivered: true,
    }
]

let condiciones = retoHero2(personas);
console.log(condiciones);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//BUSCA EN UN STRING SI EXISTE UN CARACTER EN ESPECIFICO Y SI EXISTE RETORNA TRUE SI NO RETORNA FALSE
//EJEMPLO EN EL STRING SANTIAGO BUSCA SI EXISTE LA PARABRA TIAGO, COMO SI EXISTE SE IMPRIMIRA UN TRUE,
function solution(word, query){
    return word.toLowerCase()
    .includes(query.toLowerCase());
}; 

console.log(solution("Ana lava la tina", "ana"));
console.log(solution("Santiago", "tiago"));
console.log(solution("Nicolas", "ana"));

