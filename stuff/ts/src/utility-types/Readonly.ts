/* Constructs a type with all properties of Type set to readonly, meaning the
 properties of the constructed type cannot be reassigned.

 Ejemplo en Entorno de Trabajo:
Cuando quieres asegurar que ciertos objetos no sean modificados una vez creados,
como configuraciones o constantes.
 */

type GiftCard = {
  to: string;
  date: Date;
  money: number;
};

const sarahsGift: Readonly<GiftCard> = {
  to: "Sarah",
  date: new Date(),
  money: 200,
};

console.log("sarahsGift :>> ", sarahsGift);

// sarahsGift.date = new Date(); // No podemos reasignar el valor de la propiedad date
