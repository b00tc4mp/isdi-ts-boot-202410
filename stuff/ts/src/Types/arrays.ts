//Arrays types
//There ara two syntax
const stringsArray: string[] = ["jhonnas", "harumy", "misaki"];

const numbersArray: Array<number> = [2, 3, 6, 7]; //another syntax

stringsArray.push("Mikaela");
// stringsArray.splice(0, 1, 4); // This will fail with this error: Argument of type 'number' is not assignable to parameter of type 'string'.

type UserStructure = {
  name: string;
  age: number;
};

// We can create our arrays type
const usersArray: UserStructure[] = [
  {
    name: "Soma",
    age: 32,
  },
  {
    name: "Zyanya",
    age: 28,
  },
];

usersArray.push({
  name: "Poyo",
  age: 100,
});

console.log("usersArray :>> ", usersArray);

//Multidimensional arrays
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "O"],
  ["O", "X", "X"],
];

//Exercise
type ProductType = {
  name: string;
  price: number;
};

const products: ProductType[] = [
  {
    name: "Matcha",
    price: 3.2,
  },
  {
    name: "Empanada argentina",
    price: 2,
  },
  {
    name: "Cookie",
    price: 2.3,
  },
];

const getTotal = (products: ProductType[]): number => {
  return products.reduce((total, product) => (total += product.price), 0);
};

console.log("getTotal :>> ", getTotal(products));
