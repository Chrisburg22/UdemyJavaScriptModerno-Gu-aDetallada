//EJEMPLOS DE STRING
let nombre = 'Peter Parker';//Declara e inicializara
console.log(nombre);

nombre = 'Ben Parker';//reasigna
console.log( nombre);

nombre = "Tia May";//reasigna
console.log( typeof nombre);

//EJEMPLOS CON BOOLEANOS
let esMarvel = false;
console.log( typeof esMarvel);

esMarvel = true;
console.log( typeof esMarvel);

//EJMPLOS DE NUMBERS
nombre = 123;
console.log( typeof nombre);

let edad = 33;
console.log( typeof edad);

edad = 33.001;
console.log( typeof edad);

//EJEMPLO DE UNDEFINED
let superPoder;
console.log( typeof superPoder);

//EJEMPLO DE NULL
let soyNull = null;
console.log( typeof soyNull);

//EJMPLOS CON SYMBOL
//El principal use de un symbol es identificar propiedades de manera única 
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1);

console.log( symbol1 === symbol2);