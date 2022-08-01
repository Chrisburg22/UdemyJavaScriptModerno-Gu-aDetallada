class Persona { 

    static porObjeto( {nombre, apellido, pais} ) {       // Esto nos permite tner diferentes contructores dependiendo del caso de la variable
        return new Persona( nombre, apellido, pais );
    }
    constructor( nombre, apellido,pais ) {
        this.nombre  = nombre;
        this.apellido  = apellido;
        this.pais        = pais;
    }

    getInfo() {
        console.log( `info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }

}

const nombre1 = 'Melissa',
          apellido1 = 'Flores',
          pais1         = 'México';

const ana = {
    nombre: 'Ana',
    apellido: 'Herrera',
    pais: 'Brasil',
}

const persona1 = new Persona( nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto( ana );

persona1.getInfo();
persona2.getInfo();