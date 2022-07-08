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