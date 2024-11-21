// una interface es un contrato que obliga a las clases a implementar; tener ciertas propiedades y metodos. Es cuando no hay tanta relacion entre las clases.
//la diferencia a una clase abstracta es que una interface no  te dice como implementar el metodo en comncreto
// una clase tambien puede heredar de varias interfaces
// se pueden duplicar interfaces con el mismo nombre con diferentes propiedades


type Role = "team lead" | "senior developer" | "junior developer" | "product manager"

interface IEmployee {
    tasks: string[]
    calculateSalary(): number | string
    assignTask(task: string[]): void
}

class Employee implements IEmployee {
    private _salary: number = 1200
    tasks: string[] = []

    constructor(public name: string, public role: Role) { }

    calculateSalary(): number | string {
        switch (this.role) {
            case "team lead":
                this._salary = 3000
                return this._salary
            case "senior developer":
                this._salary = 2000
                return this._salary
            case "junior developer":
                this._salary = 1300
                return this._salary
            case "product manager":
                this._salary = 6000
                return this._salary
            default:
                return "haber estudiado"
        }
    }

    assignTask(task: string[]): void {
        task.forEach(newTask => this.tasks.push(newTask))

    }

}

const employee = new Employee("Debora", "team lead")

employee.assignTask(["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"])
employee.calculateSalary()

console.log(employee)

const employee2 = new Employee("Victury", "junior developer")

employee2.assignTask(["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4"])
employee2.calculateSalary()

console.log(employee2)

export default Employee
