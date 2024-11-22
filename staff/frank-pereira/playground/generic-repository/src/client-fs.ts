import { join } from "path";
import FsRepository from "./FsRepository";
import ProductService from "./ProductService";
import { Product } from "./types";

const filePath = join(process.cwd(), "data", "products.json");

const fsRepository = new FsRepository<Product>(filePath);

const fsRepositoryProductService = new ProductService(fsRepository);

const main = async (): Promise<void> => {
  await fsRepositoryProductService.deleteAllProducts();

  await fsRepositoryProductService.createProduct({
    id: "1",
    name: "Pikmin 4",
    price: 47,
  });

  await fsRepositoryProductService.createProduct({
    id: "2",
    name: "Astral Chain",
    price: 34,
  });

  await fsRepositoryProductService.createProduct({
    id: "3",
    name: "Mario & Luigi",
    price: 48,
  });

  let videogames = await fsRepositoryProductService.getAllProduct();
  console.log("videogames :>> ", videogames);

  // await fsRepositoryProductService.deleteProduct("2");

  // videogames = await fsRepositoryProductService.getAllProduct();
  // console.log("videogames :>> ", videogames);

  await fsRepositoryProductService.updateProduct("1", { price: 30 });

  const pikmin = await fsRepositoryProductService.getProductById("1");

  console.log(pikmin);
};

main();
