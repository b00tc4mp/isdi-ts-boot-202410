/* Los genericos son utilizados para crear clases o interfaces que acepten un tipo de dato. Como si aceptara una variable 
que indica el tipo  que va a recibir. */


const arr: Array<string> = []

arr.push("hola")
// arr.push(true) Da error por que el tipado solo puede ser string


type User<T> = { // va a recibir un dato de tipo T
    username: string,
    password: string,
    recoveryPsssword: () => T
}

const user: User<string> = {
    username: "Jusep",
    password: "1234",
    recoveryPsssword() {
        return this.password //devuelve el mismo tipo de dato que recibe (recibe string, devuelve string)
    }
}

function identity<T>(value: T): T {
    return value
}

type Frog = {
    name: string,
    color: number
}

const frog: Frog = {
    name: "Frog",
    color: 1
}


// devolvera el tipo de dato que recibe
console.log(identity<Frog>(frog))
console.log(identity<number>(1))
console.log(identity<string>("hola"))


const names = ["pep", "juan", "anton"]

// va a recibir un T que puede ser de cualquier valor
function printNames<T>(array: T[]): void { // void por que retorna console.log (no devuelve nada)
    array.forEach(name => console.log(name))
}

printNames<string>(names)
printNames<number>([1, 2, 3])


function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}
// esta funcion recibe un tipo de dato cuyo array sera del mismo tipo de dato que recibe y devolvera el mismo tipo de dato
// Ej: la funcion recibe un array de numeros y devolvera un numero
const randomNumber = getRandomElement<number>([1, 2, 3, 4, 5])
const randomString = getRandomElement<string>(["a", "b", "c", "d", "e"])
const randomBoolean = getRandomElement<boolean>([true, false, true, false])


// creamos una clase Gift que va a recibir un tipo de dato que no sabemos
// addItem que va a recibir el mismo tipo de dato que Gift
// retrieveGifts que va a devolver un array de tipo de dato que el dato original

class Gift<T> {
    private items: T[] = []

    // addItem(item: T): void {
    //     this.items.push(item)
    // }

    // de esta manera podemos recibir mas de un item
    addItem(...items: T[]) {
        this.items.push(...items)
    }

    retrieveGifts(): T[] {
        return this.items
    }
}

// hacemos un tipado de como seria el objeto que va a recibir

type GiftItem = {
    name: string,
    price: number
}


const giftToVictor = new Gift<GiftItem>()

giftToVictor.addItem(
    {
        name: "Iphone",
        price: 1000
    },
    {
        name: "Ipad",
        price: 1500
    }
)
console.log(giftToVictor.retrieveGifts())


///

// creamos una classe playlist que recibira el tipo de dato que queremos; en este caso es Song o Vide
type Song = {
    title: string
    artist: string
}

type Video = {
    title: string
    creator: string
    resolution: string
}

class Playlist<T> {
    public queue: T[] = []
    add(elemenmt: T) {
        this, this.queue.push(elemenmt)
    }
}

const user1 = new Playlist<Song>

user1.add({
    title: "song 1",
    artist: "artist 1"
})

const user2 = new Playlist<Video>

user2.add({
    title: "video 1",
    creator: "creator 1",
    resolution: "1080p"
})

//

/* Usamos la flecha en :callback: (item: T) => boolean para especificar que callback
 es un tipo funcion que devolvera en este caso un boolean
 */
const filterArray = <T>(array: T[], callback: (item: T) => boolean): T[] => {
    return array.filter(callback)
}

/* 

asi se veria en JS
const filterArray = (array, callback) => {
    return array.filter(callback);
} 
    */;

const filterArray2 = <T>(array: T[], callback: (item: T) => boolean): T[] => {
    const result: T[] = []
    
    for (const item of array) {
        if (callback(item)) {
            result.push(item)
        }
    }

    return result
}
    