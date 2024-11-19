export interface IRepository<T> {
  getAll(): Promise<T[]>;
  getById(itemId: string): Promise<T | null>;
  add(item: T): Promise<void>;
  update(itemId: string, item: Partial<Omit<T, "id">>): Promise<void>;
  delete(itemId: string): Promise<void>;
}

export type Product = {
  readonly id: string;
  name: string;
  price: number;
};
