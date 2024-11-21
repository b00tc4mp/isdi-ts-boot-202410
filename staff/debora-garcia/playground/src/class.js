// Classes en JavaScript
// Como podenos privatizar una propiedad para que no pueda ser accedida desde afuera

class Animal {
    // propiedad que se crea en la clase y va a venir por defecto. 
    #age = 1 // es una manera de declarar una propiedad privada
    #getInfo() { // es una manera de declarar un metodo privado
        console.log("Animal Info")
    }
    constructor(name, type, color) {
        this.name = name
        this.type = type
        this.color = color
    }


    // usamos el get para poder acceder a la propiedad
    get age() {
        return this.#age
    }

    set age(newAge) {
        this.#age = newAge
    }
}

const dog = new Animal("Max", "dog", "brown")

console.log(dog.age = 32) // no da error pero no se actualiza la propiedad
console.log(dog.age)

//console.log(dog.getInfo()) //  da error por no se puede acceder al metodo

// console.log(dog.#getInfo()) // da error por no se puede acceder a la propiedad

// necesitamos un getter para poder acceder a las propiedades privadas
