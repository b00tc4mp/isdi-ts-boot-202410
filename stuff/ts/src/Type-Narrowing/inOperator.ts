/* El operador (in) de JS nos permite comprobrar si una propiedad existe
o no en un objeto. Podemos comprobar si un valor existe en un type aliases o
 interfaces antes de trabajar con el
 */

type Cat = {
  meow: () => void;
};

type Dog = {
  bark(): void; // bark: () => void
};

function talk(animal: Cat | Dog): void {
  if ("meow" in animal) {
    console.log(animal.meow()); // Aqui TS ya sabe que animal esta usando el type aliase Cat
  } else {
    console.log(animal.bark()); // Sino entra en el if, TS infiera el typo de Dog
  }
}

talk({ bark: () => console.log("Woff woff!") });

type Movie = {
  title: string;
  duration: number;
};

type TVShow = {
  title: string;
  numberOfEpisodes: number;
  episodeDuration: number;
};

const getRunTime = (multimedia: Movie | TVShow): number => {
  if ("numberOfEpisodes" in multimedia) {
    return multimedia.numberOfEpisodes * multimedia.episodeDuration;
  }

  return multimedia.duration;
};

const lionKingDuration = getRunTime({ title: "The Lion King", duration: 100 });
const fullMetalAlchimistDuration = getRunTime({
  title: "Full Metal Alchimist",
  numberOfEpisodes: 64,
  episodeDuration: 20,
});

console.log("lionKingDuration :>> ", lionKingDuration);
console.log("fullMetalAlchimistDuration :>> ", fullMetalAlchimistDuration);
