let a = 10;
let b = a;
a = 30;

console.log( {a, b} );

//Creamos un objetos nuevo copiando la informacion de uno previamente creado
//Para esto nos va a ayudar el Spread aoperator que nos va a ayudar a que no apunte a la misma direccion de memorio el nuevo objeto creado
//Gracias a esto podemos cambiar la propiedad del nuevo objeto sin modificar el original.
let juan = { nombre: 'juan' };
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana});


const cambiaNombre = ({...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}
 
let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter );

console.log( { peter, tony} );

// Arreglos
//Creamos  un nuevo arreglo apartir de uno ya creado.
//Lo podemos hacer con el operador slice que copia el array en un nueva variable
//Y tambien con el spread operator que hace exactamente lo mismo que splice solo que un poco mas rapido
const frutas = ['Manzana', 'Pera', 'Piña' ];

//Los console time es una herramienta que nos ayuda a conocer cuando tiempo tarda en procesar cierta linea de código
console.time ('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time ('spread');
const otrasFrutas2 = [ ...frutas ];
console.timeEnd('spread');

//Modificamos los nuevos arrays sin afectar el original
otrasFrutas.push('Mango');
otrasFrutas2.push('Fresa');

console.table( { frutas, otrasFrutas, otrasFrutas2 } );