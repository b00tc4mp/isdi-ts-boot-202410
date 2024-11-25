//Union types

//Allow us to give a value different posible types

let number: string | number = 21;

number = "21";

// number = false; // This will fail with the error: Type 'boolean' is not assignable to type 'string | number'.
type Coordinates = {
  long: number;
  lat: number;
};

type Points = {
  x: number;
  y: number;
};

let coordinates: Coordinates | Points = {
  lat: 231.34,
  long: 432.445,
};

//Type Narrowing
//Is simply doing a type check before working with a value, since type unions allow multiple value

function calculateTaxs(price: number | string, tax: number): number {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }

  return price * tax;
}

console.log("calculateTaxs(23, 0.7) :>> ", calculateTaxs(23, 0.7));
console.log("calculateTaxs('$23', 0.7) :>> ", calculateTaxs("$23", 0.7));

//Union Types and Arrays
const anotherCoordenates: (Coordinates | Points)[] = []; // Hay que usar Parentesis si lo que quiero es un array que puede tener tanto objetos con la estrucutra de Points como con la estructura de Coordenates

anotherCoordenates.push({ lat: 235.01, long: 123.72 });
anotherCoordenates.push({ x: 93.1, y: 23 });

console.log("anotherCoordenates :>> ", anotherCoordenates);
