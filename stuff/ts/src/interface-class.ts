type Role =
  | "team lead"
  | "senior developer"
  | "junior developer"
  | "product manager";

interface IWorker {
  tasks: string[];
  calculateSalary(): number | string;
  assignTasks(tasks: string[]): void;
}

class Worker implements IWorker {
  private _salary: number = 1200;
  tasks: string[] = [];

  constructor(public name: string, public role: Role) {}

  calculateSalary(): number | string {
    switch (this.role) {
      case "junior developer":
        this._salary = 1300;
        return this._salary;
      case "senior developer":
        this._salary = 3500;
        return this._salary;
      case "team lead":
        this._salary = 4200;
        return this._salary;
      case "product manager":
        this._salary = 6000;
        return this._salary;
      default:
        return "Haber estudiado";
    }
  }

  assignTasks(tasks: string[]): void {
    tasks.forEach((newTask) => this.tasks.push(newTask));
  }
}

const worker1 = new Worker("Lala", "team lead");

console.log("worker1 :>> ", worker1);
console.log("worker1.calculateSalary() :>> ", worker1.calculateSalary());
worker1.assignTasks(["ask for a reunion", "check pull requests"]);
console.log("worker1.tasks :>> ", worker1.tasks);

const worker2 = new Worker("Winkie", "junior developer");
console.log("worker2 :>> ", worker2);
console.log("worker2.calculateSalary() :>> ", worker2.calculateSalary());
worker2.assignTasks(["search for help", "drop down database", "cry in a hole"]);
console.log("worker2.tasks :>> ", worker2.tasks);

export default Worker;

/*Desafío: Sistema de Gestión de Transporte

Contexto:

Una empresa de logística necesita gestionar diferentes tipos de vehículos para el
transporte de mercancías. Todos los vehículos comparten cierta lógica común (como el
cálculo de combustible necesario), pero algunos vehículos tienen capacidades especiales,
como refrigeración o transporte de materiales peligrosos. 

Requisitos:

Crear una clase abstracta Vehiculo que contenga:

Propiedades comunes: pesoCarga, distanciaRecorrer.
Método común para calcular el combustible necesario (calcularCombustible).
Método abstracto mostrarDetalle que cada subclase debe implementar.
Crear una interfaz Refrigerado que defina el método mantenerTemperatura.

Crear una interfaz Peligroso que defina el método verificarSeguridad.

Crear las siguientes subclases que extienden Vehiculo y pueden implementar interfaces:

Camion que solo extiende Vehiculo.
CamionRefrigerado que extiende Vehiculo e implementa Refrigerado.
CamionPeligroso que extiende Vehiculo e implementa Peligroso.
Implementar los métodos necesarios en cada clase, asegurando que realizan operaciones lógicas
(por ejemplo, cálculos o verificaciones).

Objetivo:

Demostrar el uso de clases abstractas para compartir lógica común.
Usar interfaces para añadir funcionalidades específicas a ciertas clases.
Combinar ambos conceptos en un sistema coherente.



*/
