/* Repositorios Genéricos para Acceso a Datos
Descripción:

En aplicaciones que interactúan con bases de datos, es común tener repositorios genéricos para manejar operaciones CRUD.

. Crear la clase generica GenericRepository que maneje las siguientes operaciones:
create
findById
deleteOne
getAll

Pistas => a pesar de ser generica la clase, no deben permitir que las Entidades carezcan de id.
Implementar una interfaz que tenga los metodos con las operaciones CRUD */


interface IGenericRepository<T> {
    create(element: T): void;
    findById(id: number): T | null
    deleteOne(id: number): void;
    getAll(): T[]
}


type Model = {
    id: number
}

class GenericRepository<T extends Model> implements IGenericRepository<T> {
    private elements: T[] = []

    create(element: T): void {
        this.elements.push(element)
        console.log("Created")
    }

    findById(id: number): T | null {
        
        const elementFound = this.elements.find(element => element.id === id)

        if (!elementFound) return null
        
        return elementFound
    }

    deleteOne(id: number): void {
        const index = this.elements.findIndex(element => element.id === id)

        if (index < 0) {
            throw new Error("Element not found")
        }

        this.elements.splice(index, 1)
    }

    getAll(): T[] {
        return this.elements
    }

}

type Post = {
    id: number,
    title: string,
    body: string
}

const postRepository = new GenericRepository<Post>()

postRepository.create({
    id: 1,
    title: "title",
    body: "body"
})

postRepository.create({
    id: 2,
    title: "title2",
    body: "body2"
})

postRepository.create({
    id: 3,
    title: "title3",
    body: "body3"
})

console.log("Element found >>", postRepository.findById(1))
console.log("Get all >>", postRepository.getAll())
console.log("Deleted", postRepository.deleteOne(1))
console.log("Get all after delete one >>", postRepository.getAll())



const posts=[
    {
        id: 1,
        title: "title",
        body: "body"
    },
    {
        id: 2,
        title: "title2",
        body: "body2"
    },
    {
        id: 3,
        title: "title3",
        body: "body3"
    }]

    posts.find