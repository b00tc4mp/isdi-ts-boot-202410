import { readFile, writeFile } from "fs/promises";
import { IRepository, ItemWithoutId } from "./types";
import { RepositoryError } from "./errors";

class FsRepository<T extends { id: string }> implements IRepository<T> {
  constructor(private filePath: string) {}

  private loadData = async (): Promise<T[]> => {
    try {
      const data = await readFile(this.filePath, "utf-8");

      const parsedData = data ? (JSON.parse(data) as T[]) : [];

      return parsedData;
    } catch (error) {
      const catchedError = error as Error;

      if (catchedError.name === "ENOENT") {
        throw new RepositoryError("File not found");
      }

      throw new RepositoryError(catchedError.message);
    }
  };

  private saveData = async (data: T[]): Promise<void> => {
    try {
      await writeFile(this.filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  async getAll(): Promise<T[]> {
    try {
      const data = await this.loadData();
      return data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getById(itemId: string): Promise<T | null> {
    try {
      const data = await this.loadData();

      const item = data.find((item) => item.id === itemId);

      if (!item) {
        throw new Error("Item not found");
      }

      return item;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async add(item: T): Promise<void> {
    try {
      const data = await this.loadData();

      const itemFinded = data.find(({ id }) => id === item.id);

      if (itemFinded) {
        throw new Error("This item already exist");
      }

      data.push(item);

      await this.saveData(data);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async update(itemId: string, item: Partial<ItemWithoutId<T>>): Promise<void> {
    try {
      const data = await this.loadData();

      const itemIndex = data.findIndex(({ id }) => id === itemId);

      if (itemIndex < 0) {
        throw new Error("Item not found");
      }

      data[itemIndex] = { ...data[itemIndex], ...item };

      await this.saveData(data);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async delete(itemId: string): Promise<void> {
    try {
      const data = await this.loadData();

      const itemIndex = data.findIndex(({ id }) => id === itemId);

      if (itemIndex < 0) {
        throw new Error("Item not found");
      }

      data.splice(itemIndex, 1);

      await this.saveData(data);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteAll(): Promise<void> {
    await writeFile(this.filePath, JSON.stringify([], null));
  }
}

export default FsRepository;
