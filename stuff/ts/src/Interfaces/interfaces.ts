//Interfaces
//Sirven casi para el mismo proposito que los type aliases pero con otra sintaxis

interface Person {
  readonly id: number;
  name: string;
  surname: string;
  age?: number; // Same as type aliases
}

const marcus: Person = {
  id: 23,
  name: "Marcus",
  surname: "Aurelious",
  age: 65,
};

marcus.age = 70;
// marcus.id = 123; // Same like type aliases, thi will fail: Cannot assign to 'id' because it is a read-only property.ts(2540)

//INTERFACE METHODS

interface Dog {
  name: string;
  age: number;
  isHungried: boolean;
  bark: () => string;
  // bark(): string;
}

const rocky: Dog = {
  name: "Rocky",
  age: 7,
  isHungried: false,
  bark() {
    return `${this.name} is barking!`;
  },
};

console.log("rocky.bark() :>> ", rocky.bark());

interface Videogame {
  readonly id: number;
  name: string;
  price: number;
  genre?: string;
  getDiscount(discount: number): number;
  //getDiscount: (discount: number) => number;
}

const pikmin: Videogame = {
  id: 1,
  name: "Pikmin 4",
  price: 45,
  genre: "Strategy",
  getDiscount(discount: number) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;

    return this.price;
  },
};

console.log("pikmin.price :>> ", pikmin.price);
console.log("pikmin.getDiscount(.4) :>> ", pikmin.getDiscount(0.4));

//RE-OPEN INTERFACE
//Con las interfaces (exclusivo de las interfaces) podemos añadir nuevas propiedades despues de haberlas creado
//Con Type aliases nos daria error

// Person esta declarada al principio del fichero. ahora le añadiremos una nueva prop opcional friends
interface Person {
  friends?: string[];
}

const frodo: Person = {
  id: 2,
  name: "Frodo",
  surname: "Baggins",
  friends: ["Sam", "Gandalf", "Legolas", "Gimli"],
};

type Cat = {
  name: string;
  lives: number;
};

//Este codigo fallaria con el siguiente error: Duplicate identifier 'Cat'.ts(2300)
// type Cat = {
//   age: number;
// };

//

//EXTENDS INTERFACE (Herencia)
//una interface puede extender(heredar) de multiples interfaces
//La interface Dog esta definida mas arriba. Ahora le añadimos una nueva propiedad jobs
interface ServiceDog extends Dog {
  job: "support" | "bomb" | "drugs sniffer";
}

const neko: ServiceDog = {
  name: "Neko",
  age: 5,
  isHungried: true,
  job: "support",
  bark(): string {
    return `${this.name} is barking WOFF WOFF !`;
  },
};

console.log("neko.job :>> ", neko.job);
console.log("neko.bark() :>> ", neko.bark());

//Herencia multiple

interface People {
  name: string;
}

interface Employee {
  readonly id: string;
  email: string;
}

interface SoftwareEngineer extends People, Employee {
  level: "beginner" | "middle" | "senior";
  languages: Array<string>; // string[]
}

const zero: SoftwareEngineer = {
  id: "0",
  name: "Zero",
  email: "zero@gmail.com",
  level: "beginner",
  languages: ["ts", "node", "html"],
};

const printEngineerLanguages = ({ languages }: SoftwareEngineer): void => {
  languages.forEach((language) => {
    console.log(language);
  });
};

printEngineerLanguages(zero);

function sum(x: number, y: number): number {
  return x + y;
}

console.log(sum(8, 4));
