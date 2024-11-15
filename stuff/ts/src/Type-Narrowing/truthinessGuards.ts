/* Truthiness Guards
  Al igual que en JS, podemos checkear si un valor es truthy or falsy antes de trabajar con el
  Esto puede ser de ayuda para evitar errores cuando los valores pueden ser null o undefined
 */

const printLetter = (word: string | null): void => {
  if (!word) {
    console.log("No word was provided");
  } else {
    word.split("").forEach((letter) => console.log(letter));
  }
};

printLetter("Aleluya!");
