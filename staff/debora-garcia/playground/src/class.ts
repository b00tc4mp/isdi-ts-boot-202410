/* class Animal {
    age= 1 // propiedad que se crea en la clase y va a venir por defecto. 
    name: string
    kind: string
    color: string
    constructor(name: string, kind: string, color: string) {
        this.name = name
        this.kind = kind
        this.color = color
    } 

}
// manera de abrebiar la clase

    /* class Animal {
    age = number
    constructor(public name: string, public kind: string, public color: string)
     {}

} */

/* 
class Animal {
    private age: number = 0
    constructor(
        public name: string,
        public kind: string,
        public color: string)
    {}

} */

/* 
    class Animal {
        private _age: number = 0
        constructor(
            public name: string,
            public kind: string,
            public color: string)
        { }

        get age(): number {
            return this._age
        }
        
        set age(newAge: number) {
            if (newAge > 20) {
                throw new Error("Age must be greater than 0")
            }
            this._age = newAge
        }
    
    }

    const dog = new Animal("Max", "dog", "brown")

dog.age = 12
console.log(dog.age)
 */

//HERENCIA

//protected : puedes acceder a propiedades y metodos dentro de la misma clase y clases heredadas pero no fuera.

/*   class Animal {
    private _age: number = 1 // sino ponemos _ no se puede acceder desde afuera
    constructor(
        public name: string,
        public kind: string,
        public color: string
    ) { }

    get age(): number {
        return this._age
    }

    // los setters no deben tener return, y tenemos que poner el _ a age para que se pueda crear el metodo con el mismo nombre de la propiedad
    set age(newAge: number) {
        if (newAge > 0) {
            throw new Error("Age must be greater than 0")
        }
        this._age = newAge
    }

     protected makeNoise(noise: string): void{
        console.log(noise)
    }

}  
*/

// abstract class: es una clase que no puede ser instanciada, pero si puede ser heredada

abstract class Animal {
    private _age: number = 1 // sino ponemos _ no se puede acceder desde afuera
    constructor(
        public name: string,
        public kind: string,
        public color: string
    ) { }

    get age(): number {
        return this._age
    }

    // los setters no deben tener return, y tenemos que poner el _ a age para que se pueda crear el metodo con el mismo nombre de la propiedad
    set age(newAge: number) {
        if (newAge > 0) {
            throw new Error("Age must be greater than 0")
        }
        this._age = newAge
    }

    //no puede tener una implementacion {console.log...}
    abstract makeNoise(noise: string): void

     eat(food: string): string {
        return `${this.name} is eating ${food}`


    }

} 
class Cat extends Animal {
    constructor(name: string, kind: string, color: string) {
        super(name, kind, color)
    }

    //hay que definir el metodo ya que por herencia es un metodo absrtacto

    makeNoise(noise: string) { // a este metodo si que podemos acceder a este metodo por que tiene el protected
        console.log(noise)
    }

}

const cat = new Cat("Tom", "cat", "black")

cat.makeNoise("meoooow")

console.log(cat.eat("fish"))

// const dog = new Animal("Max", "dog", "brown") se queja por que no se puede instanciar una clase abstracta

// dog.age = 12
// console.log(dog.age)

/* class Cat extends Animal {
    constructor(name: string, kind: string, color: string) {
        super(name, kind, color)
    }
    makeNoise(noise: string) {
        console.log(noise)
    }
}

const cat = new Cat("Tom", "cat", "black")
cat.makeNoise("meow") */


//exportamos para que se no esté en el scope global, asi cambiamos la ruta y no se muestra como que está duplicado.
export default Animal
