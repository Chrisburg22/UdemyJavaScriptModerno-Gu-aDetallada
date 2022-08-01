class Rectangulo {
    #area = 0; // Con el sigo de gato se puede lograr que una prepiedad sea de la clase privada haciendo que no pueda modificar por fuero. Si no más bien por medio de metodos o sets

    constructor(base = 0, altura = 0){
        this.base   = base;
        this.altura = altura;
         
        this.#area = base * altura;
    }

    set setCambiaAltura( altura ){
        this.#area = altura * this.base;
        this.altura = altura;
    }

    set setCambiaBase ( base ){
        this.#area = this.altura * base;
        this.base = base;
    }
    get getRetornaArea () {
        return `El area es de ${this.#area}`;
    }
}
 const instancia1 = new Rectangulo( 10, 15 );
 console.log(instancia1);
 console.log(instancia1.getRetornaArea);

 instancia1.setCambiaAltura = 25 ;
 console.log(instancia1);
 console.log(instancia1.getRetornaArea);


