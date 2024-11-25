function square(number: number): number {
  return number * number;
}

console.log("square(2) :>> ", square(6));

const greet = (name: string = "stranger"): string => {
  return `Hello ${name}`;
};

console.log('greet("Charles") :>> ', greet("Charles"));
console.log('greet("Charles") :>> ', greet());

// ts infiere el tipo del retorno de la funcion usando un type union string | number
function randomNumber(number: number) {
  if (Math.random() > 0.5) {
    return number.toString();
  }

  return number;
}

console.log("randomNumber(7) :>> ", randomNumber(7));

const colors = ["orange", "blue", "red"];

const upperCasedColors = colors.map(function (color) {
  return color.toUpperCase();
});

console.log("upperCasedColors :>> ", upperCasedColors);

function twoFer(name: string = "you"): string {
  return `One for ${name}, one for me`;
}

const oneForZero = twoFer("Zero");
const oneForYukia = twoFer("Yukia");

console.log("oneForZero :>> ", oneForZero);
console.log("oneForYukia :>> ", oneForYukia);
console.log("twoFer() :>> ", twoFer());

const isLeapYear = (year: number = 2024): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log("isLeapYear(1991) :>> ", isLeapYear(1991));

const printName = (person: { name: string; surname: string }): string =>
  `${person.name} ${person.surname}`;

console.log("printName :>> ", printName({ name: "Paco", surname: "Mer" }));

function getCoordinates(): { x: number; y: number } {
  return {
    x: Math.random(),
    y: Math.random(),
  };
}

console.log(getCoordinates());

//ts solo se fijará en las propiedades que le estas pasando siempre y cuando estés guardando el objeto literal en una variable
//si pasas el objeto en linea (dentro de la funcion), te dara error

// printName({ name: "Cima", surname: "Rron", age: 47 }); // aqui se quejara porque no age no existe en el tipado de person

const alamBrito = {
  name: "Alam",
  surname: "Brito",
  age: 47,
};

const printAlamBrito = printName(alamBrito); // aqui no fallará, solo se fijará en las props que si existen
console.log("printAlamBrito :>> ", printAlamBrito);
