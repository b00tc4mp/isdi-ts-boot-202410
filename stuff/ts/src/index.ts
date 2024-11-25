const sum = (a: number, b: number) => a + b;

const result1 = sum(4, 2);
const result2 = sum(12, 2);

console.log("result1 :>> ", result1);
console.log("result2 :>> ", result2);

const multiply = (...rest: number[]): number => {
  return rest.reduce((total, number) => {
    total *= number;

    return total;
  });
};

const multiplyResult1 = multiply(12, 2, 5);
const multiplyResult2 = multiply(9, 23);

console.log("multiplyResult1 :>> ", multiplyResult1);
console.log("multiplyResult2 :>> ", multiplyResult2);

type Person = {
  name: string;
  age: number;
};

const pep: Person = {
  name: "Pep",
  age: 23,
};

const persons: Person[] = [
  {
    name: "Pascal",
    age: 63,
  },
  {
    name: "Lara",
    age: 18,
  },
  {
    name: "Annna",
    age: 82,
  },
];

interface Dog {
  name: string;
  age: number;
}

interface SpecialDog extends Dog {
  skills: Array<string>; //string[]
}

function printPerson(person: Person): void {
  console.log(person);
}

printPerson({ name: "Joseeeppp", age: 59 });

//Union type
type Character = {
  name: string;
  kind: "barbarian" | "rogue" | "mage"; //Union type and literal
  score: number | string; //Union type
};

const characterMakeNoise = (character: Character): string => {
  if (character.kind === "barbarian") {
    return `${character.kind} screams: AHHAHAHAHHHH`;
  } else if (character.kind === "rogue") {
    return `${character.kind} says: ...`;
  } else {
    return `${character.kind} cast: adabracadabra`;
  }
};

const barbarian: Character = {
  name: "Conan",
  score: 200,
  kind: "barbarian",
};

console.log(characterMakeNoise(barbarian));

//Clase 2
//propiedades opcionales, Enums, repasar Union type, type never y type unknow, class acces modifiers.

type Book = {
  title: string;
  author: string;
  comments?: string[];
};

const theHobbit: Book = {
  title: "The Hobbit",
  author: "J. Tolkien",
  comments: ["amaizing", "la hostia!"],
};

const printBookInfo = (book: Book): void => {
  if (book.comments) {
    book.comments.forEach((data) => console.log(data));
  }

  console.log(book.author, book.title);
};

printBookInfo(theHobbit);

type Student = {
  name: string;
  note: number | string;
};

function getStudentNote(student: Student): string {
  if (typeof student.note === "string") {
    return `${student.name} has ${student.note}`;
  }

  return `${student.name} has ${student.note.toString()} points`;
}

console.log(getStudentNote({ name: "Joao", note: 90 }));

//Typer never
const throwException = (message: string): never => {
  throw new Error(message);
};

type CreditCardPayment = {
  method: "creditCard";
  cardNumber: string;
  cvv: string;
  expirationDate: string;
};

type PayPalPayment = {
  method: "paypal";
  email: string;
};

type BankTransferPayment = {
  method: "bankTransfer";
  accountNumber: string;
  routingNumber: string;
};

type CashPayment = {
  method: "cash";
  amount: number;
};

type Bizum = {
  method: "bizum";
  phoneNumber: number;
  amount: number;
};

type Payment =
  | CreditCardPayment
  | PayPalPayment
  | BankTransferPayment
  | CashPayment
  | Bizum;

const processPayment = (payment: Payment): string => {
  switch (payment.method) {
    case "creditCard":
      return `processing payment with the ${payment.cardNumber} card number`;
    case "cash":
      return `processing the amount ${payment.amount} of cash `;
    case "paypal":
      return `processing payment with the email ${payment.email}`;
    case "bankTransfer":
      return `processing payment on ${payment.accountNumber} account`;
    case "bizum":
      return `processing payment with bizum to ${payment.phoneNumber}`;
    default:
      const neverHappend: never = payment;
      return neverHappend;
  }
};

console.log(
  processPayment({
    method: "creditCard",
    cardNumber: "3432434fr3",
    cvv: "211",
    expirationDate: "12/3243/43",
  })
);

// Enums

enum OrderStatus {
  DELIVERED,
  PENDING,
  CANCELED,
  SHIPPED,
}

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(OrderStatus.PENDING));

enum GameDifficultY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
  INSANE = "insane",
}

function chooseDifficulty(difficulty: any): void {
  if (difficulty === GameDifficultY.EASY) {
    console.log("have fun !");
  } else if (difficulty === GameDifficultY.MEDIUM) {
    console.log("Enjoy the ride!");
  } else if (difficulty === GameDifficultY.HARD) {
    console.log("Umm, a breve one ...");
  } else {
    console.log("Are you serious ?!");
  }
}

chooseDifficulty(GameDifficultY.INSANE);

//tuples
const coordinates: [string, number, string, number] = [
  "lat:",
  423423.34234,
  "lon:",
  3423423,
];

// Type narrowing

//typeof operator

const triple = (value: number | string): number | string => {
  if (typeof value === "string") {
    let result = "";

    for (let i = 0; i < 3; i++) {
      result += value;
    }

    return result;
  }

  return value ** 3;
};

console.log(triple(3));
console.log(triple("je"));

type Cat = {
  meow(): void;
};

type Wolf = {
  bark(): void;
};

const animalSound = (animal: Cat | Wolf): void => {
  if ("meow" in animal) {
    console.log("Meowwwww");

    return;
  }

  console.log("AAUuuuuuuuU");
};

animalSound({
  bark() {
    "guaguu";
  },
});

//in operator

type Movie = {
  title: string;
  duration: number;
};

type TVShow = {
  title: string;
  numberOfEpisodes: number;
  episodeDuration: number;
};

type Mulltimedia = Movie | TVShow;

function getRunTime(multimedia: Mulltimedia): number {
  if ("numberOfEpisodes" in multimedia) {
    return multimedia.episodeDuration * multimedia.numberOfEpisodes;
  }

  return multimedia.duration;
}

const esreck: Movie = {
  title: "Esreck",
  duration: 90,
};

const gossipGirls: TVShow = {
  title: "Gossip girls",
  numberOfEpisodes: 121,
  episodeDuration: 48,
};

const esreckRunTime = getRunTime(esreck);
const gossipGirlsRunTime = getRunTime(gossipGirls);

console.log("esreckRunTime :>> ", esreckRunTime);
console.log("gossipGirlsRunTime :>> ", gossipGirlsRunTime);

//instanceof operator

class Phone {
  isLiked: boolean = false;

  constructor(public brand: string, public price: number) {}
}

class Tablet {
  constructor(
    public brand: string,
    public price: number,
    public size: number
  ) {}
}

const phone = new Phone("Pixel", 450);
const tablet = new Tablet("Samsung", 583, 7);

const getDeviceInfo = (device: Phone | Tablet): string | number => {
  if (device instanceof Phone) {
    return device.brand;
  }

  return device.size;
};

console.log(getDeviceInfo(phone));
console.log(getDeviceInfo(tablet));

//truthiness guards

const printLetter = (word: string | null): string => {
  if (!word) {
    throw new Error("word not provided !");
  }

  return word;
};

console.log(printLetter("Mehhhhh"));

/*En TypeScript, los type predicates (predicados de tipo) son una característica que permite al
 compilador inferir de manera más precisa el tipo de una variable después de realizar una comprobación
 lógica. Esto es especialmente útil cuando trabajamos con tipos unión o con el tipo any, y necesitamos
 asegurarnos de que una variable es de un tipo específico antes de operar con ella.
 */

/*function nombreFunción(valor: any): valor is Tipo {
  // lógica de comprobación
}*/

type Fish = {
  swim(): string;
};

type Bird = {
  fly(): string;
};

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function moveAnimal(animal: Fish | Bird): string {
  if (isFish(animal)) {
    return animal.swim();
  }

  return animal.fly();
}

console.log(moveAnimal({ fly: () => "i believe i can fly" }));

//Discriminated union

/*Discriminated union (unión discriminada) en TypeScript es un patrón que
 permite manejar tipos de unión de manera segura y eficiente. Consiste en:

Tipos de unión: Tipos que pueden ser uno de varios tipos posibles.
Propiedad discriminante: Una propiedad común a todos los tipos en la unión,
con valores literales únicos que identifican el tipo específico.
Este patrón facilita al compilador el estrechamiento de tipos (type narrowing)
al distinguir claramente entre los diferentes tipos en una unión, basándose
en el valor de la propiedad discriminante. */

type Email = {
  kind: "email";
  subject: string;
  recipient: string;
};

type Sms = {
  kind: "sms";
  phoneNumber: number;
  text: string;
};

type Telegram = {
  kind: "telegram";
  userId: string;
  username: string;
};

type NotificationMessage = Email | Sms | Telegram;

function sendNotificationMessage(notification: NotificationMessage): void {
  switch (notification.kind) {
    case "email":
      console.log(
        `Sending email to ${notification.recipient} with the subject ${notification.subject}`
      );

      break;
    case "sms":
      console.log(`Sending sms to ${notification.phoneNumber}`);

      break;
    case "telegram":
      console.log(`Sending message to ${notification.username}`);

      break;

    default:
      console.log("Get a life!");
  }
}

sendNotificationMessage({
  kind: "sms",
  phoneNumber: 4322345221,
  text: "Helppp",
});
