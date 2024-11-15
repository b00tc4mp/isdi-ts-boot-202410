/*En TypeScript, los type predicates (predicados de tipo) son una característica que permite al
 compilador inferir de manera más precisa el tipo de una variable después de realizar una comprobación
 lógica. Esto es especialmente útil cuando trabajamos con tipos unión o con el tipo any, y necesitamos
 asegurarnos de que una variable es de un tipo específico antes de operar con ella.
 */

/*function nombreFunción(valor: any): valor is Tipo {
  // lógica de comprobación
}*/

//Example .1

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

const dory: Fish = {
  swim: () => "Nadaremos, nadaremos !",
};

const michaelJordan: Bird = {
  fly: () => "I believe i can fly",
};

console.log("moveAnimal(michaelJordan):>> ", moveAnimal(michaelJordan));
console.log("moveAnimal(dory) :>> ", moveAnimal(dory));

//Example .2

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  permissions: string[];
}

function isAdmin(user: User | Admin): user is Admin {
  return (user as Admin).permissions !== undefined;
}

function processUser(user: User | Admin): string {
  if (isAdmin(user)) {
    return `User with permissions: ${user.permissions.join(", ")}`;
  }

  return user.name;
}

const adminUser = processUser({
  name: "Polo",
  email: "polo@sur.com",
  permissions: ["read", "write", "execute"],
});

const user = processUser({ name: "Zule", email: "zule@brilla.net" });

console.log("adminUser :>> ", adminUser);
console.log("user :>> ", user);
