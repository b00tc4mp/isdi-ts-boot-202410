/*
Genéricos

Introducción al Concepto de Genéricos
¿Qué son los Genéricos?

Los genéricos en TypeScript son una forma de crear componentes que funcionen con tipos
variados, permitiendo el reuso de código y la flexibilidad sin sacrificar la seguridad
de tipos.

Analogía con JavaScript:

En JavaScript, las funciones y clases son agnósticas de tipos debido a su tipado 
dinámico. Sin embargo, esto puede llevar a errores en tiempo de ejecución que son 
difíciles de detectar. */

//JS example

// function identity(value) {
//   return value;
// }

// const number = identity(42);      // 42
// const text = identity("Hola");    // "Hola"

//En este ejemplo, la función identity acepta cualquier valor y lo retorna.
//En JavaScript, no hay seguridad de tipos que nos ayude a saber qué tipo de dato
//estamos manejando.

/* Los genéricos proporcionan variables a los tipos. Un ejemplo común es un array.
Un array sin genéricos puede contener cualquier cosa. Un array con genéricos puede
describir los valores que contiene. */

const arr: Array<string> = [];

arr.push("hola");

class Gift<T> {
  private gifts: T[] = [];

  add(gift: T): void {
    this.gifts.push(gift);
  }

  retrieveGifts(): T[] {
    return this.gifts;
  }
}

type Present = {
  name: string;
  size: number; //inch;
  price: number;
};

const gifts1 = new Gift<Present>();

gifts1.add({ name: "Nintendo Switch 2", price: 450, size: 17 });
gifts1.add({ name: "Catan", price: 30, size: 30 });
gifts1.add({ name: "Socks", price: 2.5, size: 12 });

const myGifts = gifts1.retrieveGifts();

console.log(myGifts);

const numbersArray: Array<number> = [];

type User<Type> = {
  username: string;
  password: string;
  recoveryPassword: () => Type;
};

const user: User<string> = {
  username: "Pep",
  password: "123123123",
  recoveryPassword() {
    return this.password;
  },
};

console.log(user.recoveryPassword());

function identity<T>(item: T): T {
  return item;
}

type Cat = {
  name: string;
  age: number;
};

const cat: Cat = {
  name: "Mikan",
  age: 12,
};

console.log(identity<string>("Hi!"));
console.log(identity<number>(34));
console.log(identity<Cat>(cat));

const names = ["pep", "lara", "mar", "Cez"];

function printNames<T>(names: T[]): void {
  names.forEach((name) => console.log(name));
}

printNames<string>(names);

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);

  return list[randomIndex];
}

//generic arrow function

// const genericGetRandomElement = <T>(list: T[]): T => {
//   const randomIndex = Math.floor(Math.random() * list.length);

//   return list[randomIndex];
// };

/*
  Muchas veces TS puede inferir el tipo del generico <T> mirando el type del
  parametro. Ej: aunque no use el generico <Cat> en la linea 65, TS lo infiere
  a traves del tipo del parametro 
 */

const randomBoolean = getRandomElement<boolean>([true, false, false, true]);
const randomNumber = getRandomElement<number>([2, 54, 98, 0, 7]);
const randomCat = getRandomElement<Cat>([
  { name: "pep", age: 4 },
  { name: "julius", age: 1 },
  { name: "rangel", age: 5 },
  { name: "mora", age: 9 },
]);

console.log("randomBoolean :>> ", randomBoolean);
console.log("randomNumber :>> ", randomNumber);
console.log("randomCat :>>", randomCat);

/* Genericos con multiples tipos. TS infiere el type del retorno,
   en este caso una interseccion entre el tipo T y el U
*/

function merge<T, U>(object: T, object2: U) {
  return {
    ...object,
    ...object2,
  };
}

const mergedObjects = merge({ name: "lol" }, { friends: ["mika", "zerdo"] });

console.log("mergedObjects :>> ", mergedObjects);

/* Tambien podemos restringir (constraints) el type de los genericos.
   En el ejemplo anterior, no controlamos el tipo de los genericos y nos pueden pasar,
   cualquier 'cosa' que no sea un objeto.
*/

function getCalification<T extends number, U extends string>(
  note: T,
  message: U
) {
  return message + note;
}

const calification1 = getCalification(9, "You get a : ");

console.log("calification1 :>> ", calification1);

/* Default type parameters
   <T = number>
   estamos diciendo que, si no le decimos a TS el tipo del parametro,
   por defecto sea de type number 
 */

function makeEmptyArray<T = number>(): T[] {
  return [];
}

const numbers = makeEmptyArray();
const booleans = makeEmptyArray<boolean>();

numbers.push(99);
booleans.push(true);

console.log("numbers, booleans :>> ", numbers, booleans);

/* identityFunction es una funcion generica  que acepta un argumento
   de tipo Type y devuelve un valor de tipo Type.

 */
function identityFunction<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type = identityFunction;

const lettersArray = myIdentity(["a", "b", "c"]);

console.log("lettersArray :>> ", lettersArray);

/* Generic Classes */
//A la igual que en las funciones, podemos escribir clases genericas

type Song = {
  title: string;
  artist: string;
};

type Video = {
  title: string;
  creator: string;
  resolution: string;
};

class Playlist<T> {
  public queue: T[] = [];
  add(element: T) {
    this.queue.push(element);
  }
}

const user1 = new Playlist<Song>();
user1.add({ artist: "ACDC", title: "TNT" });
user1.add({ artist: "Miles Davis", title: "So What" });

console.log(user1.queue);

const user2 = new Playlist<Video>();
user2.add({
  title: "Tortilla de patata",
  creator: "Cocina con Carmen",
  resolution: "1024",
});

console.log(user2.queue);

const filterArray = <T>(
  array: T[],
  filterFunction: (item: T) => boolean
): T[] => {
  const result: T[] = [];

  for (const item of array) {
    if (filterFunction(item)) result.push(item);
  }

  return result;
};

type Guitar = {
  brand: "Gibson" | "PRS" | "Fender";
  model: string;
  cost: number;
};

const guitarsCollection: Guitar[] = [
  {
    brand: "Gibson",
    model: "Les Paul",
    cost: 1200,
  },
  {
    brand: "Fender",
    model: "Telecaster",
    cost: 1300,
  },
  {
    brand: "PRS",
    model: "Jonh Mayer",
    cost: 1000,
  },
  {
    brand: "Gibson",
    model: "SG",
    cost: 800,
  },
  {
    brand: "Fender",
    model: "Stratocaster",
    cost: 650,
  },
];

const gibsons = filterArray(
  guitarsCollection,
  (guitar) => guitar.brand === "Fender"
);

console.log("Gibson guitars :>>", gibsons);

function mapFunction<T, U>(array: T[], transform: (item: T) => U): U[] {
  const results: U[] = [];

  for (const item of array) {
    results.push(transform(item));
  }

  return results;
}

const triple = mapFunction([2, 4, 6], (number) => `the ${number}`);

console.log("triple :>> ", triple);

//Pila => Stack

interface IStack<T> {
  push(element: T): void;
  pop(): T | undefined;
  peek(): T;
  size: number;
}

class Stack<T> implements IStack<T> {
  size: number = 0;
  private storage: T[] = [];

  push(element: T): void {
    this.storage.push(element);
    this.size++;
  }

  pop(): T | undefined {
    if (this.size < 1) {
      throw new Error("The stack is empty");
    }

    const element = this.storage.pop();
    this.size--;

    return element;
  }

  peek(): T {
    if (this.size < 1) {
      throw new Error("The stack is empty");
    }

    return this.storage[this.storage.length - 1];
  }
}

type Vinils = {
  duration: number; //minutes
  artist: string;
};

const vinils = new Stack<Vinils>();

vinils.push({ artist: "Lana de Rey", duration: 90 });
vinils.push({ artist: "Taylor Swift", duration: 120 });
vinils.push({ artist: "Soul King", duration: 90 });

console.log(vinils.peek());

const soulKing = vinils.pop();

console.log("soulKing :>> ", soulKing);

console.log(vinils.peek());

console.log("vinils.size :>> ", vinils.size);
