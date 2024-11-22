import InMemoryRepository from "./InMemoryRepository";
import ProductService from "./ProductService";
import { Product } from "./types";

const inMemoryRepo = new InMemoryRepository<Product>();

const inMemoryProductService = new ProductService(inMemoryRepo);

//Create four products
Promise.all([
  inMemoryProductService.createProduct({ id: "1", name: "PS5", price: 420 }),
  inMemoryProductService.createProduct({
    id: "2",
    name: "Nintendo Switch",
    price: 300,
  }),
  inMemoryProductService.createProduct({ id: "3", name: "XBox", price: 380 }),

  inMemoryProductService.createProduct({ id: "4", name: "Sega", price: 120 }),
])
  .then(() => inMemoryProductService.getAllProduct().then(console.log))
  .then(() => inMemoryProductService.getProductById("2").then(console.log))
  .then(() => inMemoryProductService.deleteProduct("4"))
  .then(() => console.log("Product deleted"))
  .then(() =>
    inMemoryProductService.updateProduct("1", {
      name: "PS4",
      price: 145,
    })
  )
  .then(() => inMemoryProductService.getAllProduct().then(console.log))
  .then(() => inMemoryProductService.deleteAllProducts())
  .then(() => inMemoryProductService.getAllProduct().then(console.log));
