/* Record<Keys, Type>

Constructs an object type whose property keys are Keys and whose property values are Type.
This utility can be used to map the properties of a type to another type. 

El utility type Record<K, T> es un tipo genérico en TypeScript que te permite crear un tipo de objeto
cuyas claves son de tipo K y cuyos valores son de tipo T. En otras palabras, Record te permite crear 
mapas o diccionarios tipados, donde especificas el conjunto de claves permitidas y el tipo de los valores 
asociados a esas claves.

Piensa en Record<K, T> como un molde genérico para crear objetos donde las claves son un conjunto específico
y los valores tienen un tipo común.
Usar Record es como decir: "Quiero un objeto que tenga exactamente estas claves, y todos sus valores serán
de este tipo".


Usa Record<K, T> cuando:

Las claves provienen de otro tipo (como una unión de strings).
Quieres asegurar que todas las claves del conjunto estén presentes.
Necesitas flexibilidad y evitar repetición de código.
Usa type o interface cuando:

Las claves y sus tipos son fijos y conocidos.
Las propiedades pueden tener tipos diferentes.
Necesitas aprovechar características específicas de interface, como la herencia múltiple.
*/

type Role = "admin" | "editor" | "viewer" | "root";

type Permissions = Record<Role, { canEdit: boolean; canDelete: boolean }>;

// const rolesArray = ["admin", "editor", "viewer", "root", "super"] as const;
// type Role = (typeof rolesArray)[number];

const permissions: Permissions = {
  admin: { canDelete: true, canEdit: true },
  viewer: { canDelete: false, canEdit: false },
  editor: { canDelete: false, canEdit: true },
  root: { canDelete: true, canEdit: true },
};

const languagesCollection = ["en-US", "es-ES", "fr-FR"] as const;

type Language = (typeof languagesCollection)[number];

type Messages = Record<Language, string>;

const greetings: Messages = {
  "en-US": "Hi",
  "es-ES": "Hola",
  "fr-FR": "Bonjour",
};

//calculator object

type Operations = "sum" | "rest" | "divide" | "multiply";
type Calculate = (x: number, y: number) => number;

type Calculator = Record<Operations, Calculate>;

const calculator: Calculator = {
  sum: (x, y) => x + y,
  rest: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => {
    if (y === 0) {
      throw new Error("Cannot divide a number between zero");
    }

    return x / y;
  },
};

console.log("sum :>> ", calculator.sum(2, 4));
console.log("sum :>> ", calculator.rest(10, 2));
console.log("sum :>> ", calculator.sum(2, 4));
console.log("sum :>> ", calculator.sum(7, 3));

//TODO crear un event handler

type EventType = "click" | "hover" | "keypress";
type EventHandler = Record<EventType, () => void>;

const eventHandler: EventHandler = {
  click: () => console.log("onClick"),
  hover: () => console.log("onHover"),
  keypress: () => console.log("onKeyPress"),
};

eventHandler.click();
