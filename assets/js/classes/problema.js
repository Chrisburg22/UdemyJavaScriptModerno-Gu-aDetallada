const chris = {
    name: 'Christian',
    age: '22',
    imprimir () {
        console.log(`Nombre: ${this.name} - edad: ${this.age}`)
    }
}

const alejandro = {
    name: 'Alejandro',
    age: '22',
    imprimir () {
        console.log(`Nombre: ${this.name} - edad: ${this.age}`)
    }
}
 chris.imprimir();
 alejandro.imprimir();

 function Persona( name, age) {
    this.name = name;
    this.age = age;
    this.imprimir = function () {
        console.log(`Nombre: ${this.name} - edad: ${this.age}`)
    }
 }

 const zoro = new Persona('Zoro', 1.5); 
 zoro.imprimir();

 const rayo = new Persona('Rayo', 7);
 rayo.imprimir();