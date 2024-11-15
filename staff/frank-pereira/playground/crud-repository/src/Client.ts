import GenericRepository, { IEntity } from ".";

interface IMovies extends IEntity {
  name: string;
  genre: "horror" | "comedy" | "thriller" | "action";
  director: string;
  productionCosts: number;
}

const moviesRepository = new GenericRepository<IMovies>();

const batman: IMovies = {
  id: "123sd",
  name: "Batman",
  genre: "action",
  productionCosts: 1200000,
  director: "Depende de cual peli",
};

const sinister: IMovies = {
  id: "432423",
  name: "Sinister",
  genre: "horror",
  productionCosts: 2000000,
  director: "No recuerdo",
};

moviesRepository.create(batman);
moviesRepository.create(sinister);

console.log(moviesRepository.deleteById(sinister.id));
console.log(moviesRepository.findAll());
