//const sum = (a, b) => a + b; JavaScript way
const sum = (a: number, b: number): number => a + b; //TypeScript way
// se tienen que tipar los argumentos y el retorno de la funcion
const result1 = sum(4, 2)
//const result2 = sum("4", 2) //error
const result3 = sum(4, 2)

console.log("reult1 :>>", result1);
//console.log("reult2 :>>", result2);

//const multiply = (...rest: number[]): number => { } otra manera de escribir el Array
const multiply = (...rest: Array<number>): number => {
    return rest.reduce((total, number) => {
        total *= number;

        return total
    });
}

// El método `reduce` tiene un callback que recibe dos argumentos:
// 1. `total`: el acumulador, que almacena el resultado acumulado.
// 2. `number`: el valor actual del array sobre el cual se está iterando.
// Si no se proporciona un valor inicial para `total`, `reduce` usa el primer elemento del array.

const multiplyResult1 = multiply(2, 4, 5)

console.log("multiplyResult1 :>>", multiplyResult1);


// **Custom types describe la forma que va a tener un objeto
type Person = {
    name: string;
    age: number;
}

const pep: Person = {
    name: "Pep",
    age: 23, // Cambiar a "23" produce un error porque se espera un número

}

// Crear Array de objetos con el tipo `Person`
const persons: Person[] = [

    {
        name: "Pep",
        age: 23
    },
    {
        name: "Joan",
        age: 60
    },
    {
        name: "Anton",
        age: 30
    }

]


//**Interface es otra forma de describir un objeto en TS (OOP)
interface Dog {
    name: string;
    age: number;
}

// Se puede extender una `interface` para crear subtipos
// SpecialDog hereda de Dog
interface SpecialDog extends Dog {
    skills: string[];
}

function printPerson(person: Person): void { // void indica que esta funcion no devuelve nada
    console.log(person)

}

printPerson({
    name: "Juan",
    age: 29
})

//**Intersection Types
type PersonAndDog = Person & SpecialDog

const personAndDog: PersonAndDog = {
    name: "Pep",
    age: 23,
    skills: ["hunting", "flying"]
}

//**Union Type  & Literal types
type Character = {
    name: string;
    kind: "barbarian" | "rogue" | "mage" // union type  and litral
    score: number | string // type union

}

// También se pueden crear arrays con múltiples tipos usando una unión:
const randomArray: (string | number)[] = [1, "2", 3, "4"]
const randomArray2: Array<number | string> = [1, "2", 3, "4"]

const characterMakeNoise = (character: Character): string => {
    if (character.kind === "barbarian") {
        return `${character.name} says: AHHH`;
    } else if (character.kind === "rogue") {
        return `${character.name} says: raaarrr`;
    } else {
        return `${character.name} says: adacadabrabra`;
    }

}

const barbarian: Character = {
    name: "Conan",
    kind: "barbarian",
    score: 1000
}

console.log(characterMakeNoise(barbarian))


const PI = 3.14 // ya infiere a que es un numero


//**Readonly Types

// `readonly` se usa para crear propiedades que no se pueden modificar después de ser definidas
type ReadonlyPerson = {
    readonly name: string;
    readonly age: number;
}
const person: ReadonlyPerson = {
    name: "Pep",
    age: 23
}

// person.name = "Juan"; // Error: Cannot assign to 'name' because it is a read-only property


//**Propiedades opcionales

type Book = {
    title: string;
    author: string;
    comments?: string[]; // `comments` es opcional
}

const theHobbit: Book = {
    title: "The Hobbit",
    author: "J.R.R Tolkien"
}

const theHarryPotter: Book = {
    title: "Harry Potter",
    author: "J.K Rowling",
    comments: ["Good", "Great"]
}

const printBookInfo = (book: Book): void => {
    if (book.comments) {
        book.comments.forEach(data => console.log(data))
    }

    console.log(book.author, book.title)
}

printBookInfo(theHobbit)
printBookInfo(theHarryPotter)


type Student = {
    name: string;
    marks: number | string;
}

function getStudentMark(student: Student): string {

    if (typeof student.marks === "string") {
        return `${student.name} has ${student.marks}`
    } else {
        return `${student.name} has ${student.marks.toString()} points`
    }

}

console.log(getStudentMark({
    name: "Pep",
    marks: 90
}))


//**Type never  (nunca va a devolver un valor)
const throwError = (message: string): never => {
    throw new Error("Something went wrong")
}

type CreditCard = {
    method: "CreditCard",
    cardNumber: string;
    cvv: number;
    expirationDate: string;
}

type Cash = {
    method: "Cash";
    amount: number;
}

type PayPal = {
    method: "PayPal";
    email: string;
}

type BankTransfer = {
    method: "BankTransfer";
    accountNumber: string;
    routingNumber: string;
}

type PaymentMethod = CreditCard | Cash | PayPal | BankTransfer


const processPayment = (payment: PaymentMethod): string => {

    switch (payment.method) {
        case "CreditCard":
            return `Processing payment with ${payment.method} ${payment.cardNumber} ${payment.cvv} ${payment.expirationDate}`
        case "Cash":
            return `Processing payment with ${payment.method} ${payment.amount}`
        case "PayPal":
            return `Processing payment with ${payment.method} ${payment.email}`
        case "BankTransfer":
            return `Processing payment with ${payment.method} ${payment.accountNumber} ${payment.routingNumber}`

        default:
            const neverHappens: never = payment;
            return neverHappens;
    }
};

// si ahora añadimos otro tipo de pago, el switch falla ya que el default es el tipo never.
// De esta manera evitamos que si en un futuro se añade otro metodo de pago, se añada en el switch

/* type Bizum = {
    method: "Bizum";
    phoneNumber: number;
} */

// console.log(processPayment({method:"")) // Error

console.log(processPayment({
    method: "CreditCard",
    cardNumber: "1234-1234-1234-1234",
    cvv: 123,
    expirationDate: "12/12/12"
}))


//**Enums (Son un conjunto de constantes que no cambian)

enum OrderStatus {
    PENDING,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELED
}

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED
}

console.log(isDelivered(OrderStatus.DELIVERED)) // true
console.log(isDelivered(OrderStatus.CANCELED)) // false

enum GameDifficulty {
    EASY = "Easy",
    MEDIUM = "Medium",
    HARD = "Hard"
}

function chooseDifficulty(difficulty: GameDifficulty): void {
    if (difficulty === GameDifficulty.EASY) { // tambien se puede === "Easy"
        console.log("Easy")
    } else if (difficulty === GameDifficulty.MEDIUM) {
        console.log("Medium")
    } else {
        console.log("Hard")
    }
}

chooseDifficulty(GameDifficulty.EASY)
// chooseDifficulty("Easy"); // Error: Type '"Easy"' is not assignable to type 'GameDifficulty'

//**Tuples (son un array con un numero de elementos fijos (length) y de tipos fijos)

const coordinates: [number, number] = [4324.23, 3455.21]

//**Type narrowing (son las comprobaciones que hace TS, para saber si un valor es de cierto tipo o de otro)


//typeof
const triple = (value: number | string): number | string => {
    if (typeof value === "string") {
        let result = ""

        for (let i = 0; i < 3; i++) {
            result += value
        }

        return result // ya sabe que es un string
    }

    return value ** 3 // ya sabe que es un numero
}

console.log(triple(3))
console.log(triple("je"))

// in
type Cat = {
    meow(): void;
}

type Wolf = {
    bark(): void
}


const animalSound = (animal: Cat | Wolf): void => { // union type
    if ("meow" in animal) {
        console.log("Meowwwww") // in es una comprobacion de existencia
    } else {
        console.log("AAAUU")
    }
}

animalSound({
    bark() {
        "guaugu"
    }
})

type Movie = {
    title: string
    duration: number
}
type TVShow = {
    title: string
    numberOfEpisodes: number
    episodeDuration: number

}

type Multimedia = Movie | TVShow

function getRunTime(multimedia: Multimedia): number {
    if ("numberOfEpisodes" in multimedia) {
        return multimedia.episodeDuration * multimedia.numberOfEpisodes // ya asume que es un TVShow por que episodios y duracion estan definidos solamenrente en TVShow
    }
    return multimedia.duration
}

const Shrek: Movie = {
    title: "Shrek",
    duration: 120
}

const BreakingBad: TVShow = { // con control + espacio se pueden ver las propiedades
    title: "Breaking Bad",
    numberOfEpisodes: 20,
    episodeDuration: 30
}

const runTime = getRunTime(Shrek)
console.log(runTime)

const runTime2 = getRunTime(BreakingBad)
console.log(runTime2)

//instanceof (Comprueba si un objeto es de cierto tipo)

class Phone {
    isliked: boolean = false // propiedad interna que no se puede acceder
    constructor(public brand: string, public price: number) { }
}

class Tablet {
    constructor(
        public brand: string,
        public price: number,
        public size: number
    ) { }
}

/* tambien una classe se puede escribir asi:

    class Phone {
    brand: string;
    price: number;

    constructor(brand:string, price: number) {
    this.brand = brand;
    this.price = price;
}
 */


const phone = new Phone("Iphone", 1000)
const tablet = new Tablet("Samsung", 1000, 10)

const getDeviceInfo = (device: Phone | Tablet): string => {
    if (device instanceof Phone) {
        return device.brand
    }

    return device.size.toString() // tambien podemos quitar el toString y añadir string  | number en el return de la funcion

}

console.log(getDeviceInfo(phone))


//truthines guards (solo un valor es truthy o falsy)

const printLetter = (word: string | null): string => {
    if (!word) {
        throw new Error("word is not defined")
    }
    return word

}

console.log(printLetter("hola"))

//console.log(printLetter(null)) // lanza el error

//Type predicates ( permite a TS saber de forma mas precisa el tipo de variable despues de realizar una comprobacion logica, especialmente util cuando se trabaha de tipos union o any)


type Fish = {
    swim: () => string
}

type Bird = {
    fly: () => string
}

function isFish(animal: Fish | Bird): animal is Fish { //retorna un valor booleano
    return (animal as Fish).swim !== undefined // forzamos que el animal que recibe sea de tipo Fish
}


// Descriminated union (patron que permite manejar multiples tipos de union )

type Email = {
    kind: "email"
    subject: string
    recipient: string

}

type Sms = {
    kind: "sms"
    phoneNumber: number
    text: string

}

type Telegram = {
    kind: "telegram"
    userId: string
    username: string
}

type NotificationsMessage = Email | Sms | Telegram

const sendNotification = (message: NotificationsMessage): void => {
    switch (message.kind) { // a traves de una propiedad de la union (kind) se puede saber que tipo de notificacion es
        case "email":
            console.log(`Sending email to ${message.recipient} with subject ${message.subject}`)
            break
        case "sms":
            console.log(`Sending SMS to ${message.phoneNumber} with message ${message.text}`)
            break
        case "telegram":
            console.log(`Sending telegram to ${message.username}`)
            break
        default:
            console.log("Unknown message type")
    }
}

sendNotification({
    kind: "email",
    subject: "Hello",
    recipient: "hola"
})



// COMANDOS 

/* 

- Transpilar a JS

$ npx tsc

- Ejecutar con node

$ node index.js

*/
