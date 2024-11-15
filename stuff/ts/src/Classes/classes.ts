//modificadores de accesibilidad: public, privated y protected
//por defecto, todas las propiedades, campos o metodos de una clase son publicos (public)

class Player {
  readonly name: string; // podemos usar readonly al igual que con los objetos de js
  readonly surname: string;
  private score: number = 0; // no haria falta tipar este primitivo, ts lo puede inferir
  //score solo se puede acceder desde adentro de la clase Player, ya que es privado (private)

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  // metodo getter
  get getScore(): number {
    return this.score;
  }

  private secretMethod(): void {
    console.log("Secret dumb method!");
  }
}

const player1 = new Player("Alam", "Brito");

console.log(player1);

console.log(player1.getScore);

//Parameter Properties Shorthand

class Dog {
  // name: string; No necesitamos declarar los campos ni sus tipos
  // age: number;

  //ponemos un modificador de accesibilidad(en este caso public) a las propiedades en los parametros y ya no
  //necesitamos referenciar las propiedades dentro del constructor
  constructor(public name: string, public age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const dalto = new Dog("Dalto", 1);

console.log("dalto :>> ", dalto);

//Getter and Setter

class Cat {
  private _numOfLives: number = 7;

  constructor(public name: string, public age: number) {}

  get numOfLives(): number {
    return this._numOfLives;
  }

  set numOfLives(newNumberOfLives: number) {
    if (typeof newNumberOfLives !== "number") {
      throw new Error("Number of lives must be a number");
    } else if (newNumberOfLives < 1) {
      console.log(`${this.name} is dead ...`);
    } else {
      this._numOfLives = newNumberOfLives;
    }
  }
}

const mikan = new Cat("Mikan", 3);

console.log("Mikan number of lives: " + mikan.numOfLives);

mikan.numOfLives = 5;

console.log("Mikan number of lives: " + mikan.numOfLives);

//Modificador de accesibilidad protected

/* Solo tendran acceso a la propiedad, metodo o campo (field) dentro de la misma clase o cualquier 
   clase que extienda (herede) de ella
*/

class Bird {
  protected _isHungry: boolean = false;

  constructor(public name: string, public race: string) {}
}

class Sparrow extends Bird {
  toogleHungry(): void {
    this._isHungry = !this._isHungry;
  }
}

const oliver = new Bird("Oliver", "pidgeot");

console.log("oliver :>> ", oliver);

const marlon = new Sparrow("Marlon", "sparrow");

console.log("marlon :>> ", marlon);

marlon.toogleHungry();

console.log("marlon :>> ", marlon);

//Interfaces
interface Colorful {
  color: string;
}

interface Printable {
  print: () => void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print(): void {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("prada", "black");

console.log("bike1 :>> ", bike1);
console.log("jacket1 :>> ", jacket1);
jacket1.print();

/*Clases abstractas
No se pueden instanciar. Solo se puede heredar de ellas
Son como un hibrido entre interface y una clase porque pueden tener metodos sin implementar pero,
tambien pueden tener metodos o comportamientos ya implementados los cuales heredaran las clases hijas.
*/

abstract class Employee {
  constructor(public name: string, public surname: string) {}
  abstract getPay(): number;

  greet(): void {
    console.log(`Hi, my name is ${this.name}`);
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    public name: string,
    public surname: string,
    private salary: number
  ) {
    super(name, surname);
  }

  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    public name: string,
    public surname: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(name, surname);
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const employee1 = new FullTimeEmployee("Pep", "Siuu", 1300);
const employee2 = new PartTimeEmployee("Lala", "Lin", 15, 160);

employee1.greet();
employee2.greet();

console.log(employee1.getPay());
console.log(employee2.getPay());
