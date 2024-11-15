//type annotations
let PI: number = 3.14; //no haria falta tipar esta variable porque ts puede inferir el tipo

console.log("PI :>> ", PI);

const numbers = [1, 4, 23, 9, 66];

let result: Array<number> = []; // tambien se puede tipar los arrays asi: result: number[]

for (const number of numbers) {
  if (number % 2 === 0) {
    result.push(number);
  }
}

console.log("result :>> ", result);

let totalCount = 0;

for (const number of numbers) {
  if (number % 2 === 0) {
    totalCount += 1;
  }
}

console.log(totalCount);

//Readonly type

type CarType = {
  brand: string;
  model: string;
  readonly year: number; // We can not change the value of this property because is readonly
};

const car: CarType = {
  brand: "Toyota",
  model: "Camaro",
  year: 2002,
};

car.model = "Corolla";
// car.year = 2004 // This will fail because: Cannot assign to 'year' because it is a read-only property.

//BE CAREFUL WITH ANY !

let myString = "hello";
const upperCasedMyString = myString.toUpperCase();

console.log("upperCasedMyString :>> ", upperCasedMyString);

let spooky: any = 123;

myString = spooky; // Si reasignamos el valor de myString (string) a spooky (any), ts no se quejará y cambiará el tipo de myString a any y no veríamos el error hasta que no se ejecutara el código

// console.log("upperCasedMyString :>> ", myString.toUpperCase()); // Esto fallará
