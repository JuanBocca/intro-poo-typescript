'use strict'

// Interface
interface CamisetaBase{
    setColor(color:string):string;
    getColor():string;
}

// Decorador
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}   

// Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
    // Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    estampacion: any;

    // public: podemos acceder a propiedades y metodos desde cualquier lugar y clase
    // protected: podemos acceder al metodo desde cualquier lugar o clase
    // private: podemos accedes a propiedades y metodos desde la misma clase

    // Metodos (funciones o acciones del objeto)
    constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color:string):string{
        this.color = color;
        return color;
    }
    public getColor(){
        return this.color;
    }
}

// Clase hija
class Sudadera extends Camiseta{
    public capucha!: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("fas","fas","fas","fas",12);
console.log(camiseta);
camiseta.estampacion();

var sudaderaNike = new Sudadera("Rojo", "Manga larga","Nike","L",30);
sudaderaNike.setCapucha(true);
sudaderaNike.setColor("Gris");
console.log(sudaderaNike);