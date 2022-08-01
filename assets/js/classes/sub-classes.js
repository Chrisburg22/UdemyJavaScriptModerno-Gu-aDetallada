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

//Sub-Clase
class Heroe extends Persona{// LA palabra extends sirve para crear una sub-clase a pertir de un clase padre, heredandole sus Atributos y Metodos
    clan = 'sin clan';
    
    constructor (name, code , frase){
        super(name, code , frase);//Llamas al contructor de la clase padre
        this.clan = 'Los Avengers';
    }

    quienSoy() {//Modifica el metodo que heredo de la clase padre
        console.log( `Soy ${ this.code}, ${this.clan} `);
        super.quienSoy(); //Llama al metodo de la clase padre
    }
}
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy su amigable vecino el Hombre Arañana');

console.log ( spiderman );
spiderman.quienSoy();