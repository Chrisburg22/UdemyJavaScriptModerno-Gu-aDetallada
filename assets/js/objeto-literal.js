//ESTA ES UNA MANERA DE DECLARAR UN OBJETO LITERAL
let personaje = {
    name: 'Tony Stark',
    heroName: 'Iron Man',
    vivo: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'Última película': 'Infinity War',
}
//ASÍ ES COMO VAMOS A IMPIRMIR EN PANTALLA LOS DIFERENTES ELEMENTOS DEL OBJETO
console.log(personaje);
console.log(`Nombre: ${personaje.name}` );
console.log(`Super Heroe: `, personaje['heroName'] );
console.log('Edad: ', personaje.edad);

console.log('Coords: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);

console.log('No. Trajes: ', personaje.trajes.length);
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última película: ', personaje["Última película"]);

//Más detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true; // Agregamos una nueva propiedad llamada casado al objeto personaje

const entriesPares = Object.entries( personaje );//Este metodo me retorna un array de array que contiene a cada propiedad con su respectivo valor convertidos en arrays
console.log( entriesPares );

Object.freeze( personaje );//Conjela el objeto tal cual esta y bloquea cualquier cambio que se quiera realizar en el. Si dentro de este objeto hay otro objeto debemos tambien hacer 
                                          //freeze de este, de lo contrario si podra ser modificado

personaje.dinero = 100000000;
console.log( personaje );

//Con estos dos metodos podemos conocer el nombre y los valores de las propiedades de un objeto como si fueras un array de strings
const propiedades = Object.getOwnPropertyNames( personaje );//Crea un nuevo array con el objeto, las propiedades del objeto las transforma en strings del mismo array.
const valores          = Object.values( personaje );//Crea un array con el objeto, los valores de las propiedades se trnaforman en string para el nuevo array
console.log( {propiedades, valores} );



