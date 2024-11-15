/* Repositorios Genéricos para Acceso a Datos
Descripción:

En aplicaciones que interactúan con bases de datos, es común tener repositorios
genéricos para manejar operaciones CRUD. */

export interface IEntity {
  id: string;
}

interface IRepository<T> {
  create(entity: T): void;
  deleteById(id: string): void;
  findById(id: string): T | undefined;
  findAll(): T[];
}

class GenericRepository<T extends IEntity> implements IRepository<T> {
  private entities: T[] = [];

  public create(entity: T): void {
    this.entities.push(entity);
  }

  public deleteById(id: string): void {
    const entityId = this.entities.findIndex((entity) => entity.id === id);

    if (entityId < 0) {
      throw new Error("Entity not found");
    }

    this.entities.splice(entityId, 1);
  }

  public findById(id: string): T | undefined {
    const entity = this.entities.find((entity) => entity.id === id);

    if (!entity) {
      throw new Error("Entity not found");
    }

    return entity;
  }

  public findAll(): T[] {
    return this.entities;
  }
}

export default GenericRepository;
