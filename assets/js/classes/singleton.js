// Instancia unica de una Clase
// Creamos una clase unica, que quiere decir que por mas clases que sean ceradas siempre apuntaran a la primer estancia creada
class Singleton {

    static instancia;
    nombre = '';

    constructor ( nombre = ' ' ){

        if( !!Singleton.instancia ){ // si la instancia ya exite de manera booleano 
            return Singleton.instancia;
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

 const   instacia1 = new Singleton( 'Spiderman' );
 const   instacia2 = new Singleton('Ironman');
 const   instacia3 = new Singleton('Hulk');

 console.log(`El nombre de la instacia1 es ${ instacia1.nombre }`); // "Spiderman"
 console.log(`El nombre de la instacia2 es ${ instacia2.nombre }`); // "Spiderman"
 console.log(`El nombre de la instacia3 es ${ instacia3.nombre }`); // "Spiderman"
