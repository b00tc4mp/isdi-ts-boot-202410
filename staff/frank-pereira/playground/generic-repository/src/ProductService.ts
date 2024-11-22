import { IRepository, ItemWithoutId, Product } from "./types";

class ProductService {
  constructor(private repository: IRepository<Product>) {}

  async getAllProduct(): Promise<Product[]> {
    return this.repository.getAll();
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.repository.getById(id);
  }

  async createProduct(item: Product): Promise<void> {
    return this.repository.add(item);
  }

  async updateProduct(
    productId: string,
    item: Partial<ItemWithoutId<Product>>
  ): Promise<void> {
    return this.repository.update(productId, item);
  }

  async deleteProduct(productId: string): Promise<void> {
    return this.repository.delete(productId);
  }

  async deleteAllProducts(): Promise<void> {
    return this.repository.deleteAll();
  }
}

export default ProductService;
