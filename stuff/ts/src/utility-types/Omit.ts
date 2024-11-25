/* Constructs a type by picking all properties from Type and then removing
 Keys (string literal or union of string literals). The opposite of Pick.
 
 Construye un tipo excluyendo un subconjunto de propiedades de otro tipo.

 Ejemplo en Entorno de Trabajo:
 Al exponer datos de usuarios en una API, quieres omitir campos
 sensibles como contraseñas.
 */

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;

const publicUser: PublicUser = {
  id: 1,
  name: "Pantaleon",
  email: "panta@leaon.com",
};

console.log("publicUser :>> ", publicUser);
