class Persona {

    //Metodos ,gets y propiedades státicas
    static _conteo = 0; //propiedad stática
    static get conteo( ) { // get statico
        return Persona._conteo + ' instancias';
    }

    static mensaje () { //Metodo Stático
        console.log( this.name ); // undefined
        console.log( 'Hola a todos soy un metodo stático' );
    }

    name = ' ';
    code = ' ';
    frase = ' ';
    comida = ' ';
    constructor ( name = 'Sin Nombre', code = 'Sin Código' , frase = 'Sin Frase'){
        this.name = name;
        this.code = code;
        this.frase = frase;

        Persona._conteo ++;

    }

    set setComidaFavorita( comida){
        this.comida = comida.toUpperCase();// toUpperCase Transforma el todos las letras del string en mayusculas
    }

    get getComidaFavorita (){
        return `La comida favorita de ${ this.name } es ${this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${ this.name } y mi identidad es ${ this.code }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.code } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy su amigable vecino el Hombre Arañana');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
const hulk = new Persona('Bruce Baner', 'Hulk', 'Yo siempre estoy enojado');

//Persona._conteo = 2;

spiderman.miFrase();
//ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la Tía May';
//console.log( spiderman.getComidaFavorita );
//console.log( spiderman );

console.log( 'Conteo stático', Persona._conteo );
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );