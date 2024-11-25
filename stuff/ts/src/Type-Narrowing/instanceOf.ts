/* instanceof narrowing
Utilizando este operador de JS, podemos comprobar si 'una cosa' (un valor) es una instancia
de otra (mira en la cadena de prototipos).
Muy util cuando trabajamos con clases
 */

function printFullDate(date: Date | string): void {
  if (date instanceof Date) {
    console.log(date.toUTCString()); // Aqui TS ya sabe que date es de tipo Date
  } else {
    console.log(new Date(date).toUTCString()); //Si entra aqui, sabe que date es un string
  }
}

printFullDate(new Date());
printFullDate("2024-11-01");

class User {
  constructor(public name: string) {}
}

class Company {
  constructor(public name: string) {}
}

function greet(entity: User | Company): string {
  if (entity instanceof Company) return `Welcome ${entity.name}`;

  return `Hi ${entity.name}!`;
}

const nintendo = new Company("Nintendo");
const artist = new User("Miyamoto");

const greetCompany = greet(nintendo);
const greetUser = greet(artist);

console.log("companyName :>> ", greetCompany);
console.log("userName :>> ", greetUser);
