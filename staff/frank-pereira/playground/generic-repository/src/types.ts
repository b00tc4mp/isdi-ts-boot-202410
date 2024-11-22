type ItemWithoutId<T> = Omit<T, "id">;
interface IRepository<T> {
  getAll(): Promise<T[]>;
  getById(itemId: string): Promise<T | null>;
  add(item: T): Promise<void>;
  update(itemId: string, item: Partial<ItemWithoutId<T>>): Promise<void>;
  delete(itemId: string): Promise<void>;
  deleteAll(): Promise<void>;
}

type Product = {
  readonly id: string;
  name: string;
  price: number;
};

export { ItemWithoutId, IRepository, Product };
