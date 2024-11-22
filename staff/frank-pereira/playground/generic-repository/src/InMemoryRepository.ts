import { IRepository, ItemWithoutId } from "./types";

class InMemoryRepository<T extends { id: string }> implements IRepository<T> {
  private collection: T[] = [];

  async getAll(): Promise<T[]> {
    return this.collection;
  }

  async getById(itemId: string): Promise<T | null> {
    const item = this.collection.find(({ id }) => id === itemId);

    if (!item) {
      throw new Error("Item not found");
    }

    return item;
  }

  async add(item: T): Promise<void> {
    this.collection.push(item);
  }

  async update(itemId: string, item: Partial<ItemWithoutId<T>>): Promise<void> {
    const itemIndex = this.collection.findIndex(({ id }) => id === itemId);

    if (itemIndex < 0) {
      throw new Error("Item not found");
    }

    Object.assign(this.collection[itemIndex], item);
  }

  async delete(itemId: string): Promise<void> {
    const itemIndex = this.collection.findIndex(({ id }) => id === itemId);

    if (itemIndex < 0) {
      throw new Error("Item not found");
    }

    this.collection.splice(itemIndex, 1);
  }

  async deleteAll(): Promise<void> {
    this.collection = [];
  }
}

export default InMemoryRepository;
