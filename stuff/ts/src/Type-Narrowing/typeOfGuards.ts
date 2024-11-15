/* typeof Type Guards
  Con el operador typeof haremos una comprobacion de cada uno de los tipos
  antes de ponernos a trabajar con ellos. Por ejemplo si tenemos un type union
  debemos comprobar el tipo de cada dato antes de todo.
 */

function triple(value: number | string): number | string {
  if (typeof value === "number") {
    return value * 3;
  }

  let result = "";

  for (let i = 0; i < 3; i++) {
    result += value;
  }

  return result;
}

const tripleNumber = triple(2);
const tripleWord = triple("hi");

console.log("tripleNumber :>> ", tripleNumber);
console.log("tripleWord :>> ", tripleWord);
