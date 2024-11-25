interface IEmployee {
  id: number;
  name: string;
  salary: number;

  promotion(newSalary: number): void;
}

class Employee implements IEmployee {
  private _salary: number;

  constructor(public id: number, public name: string, salary: number) {
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  private updateSalary(newSalary: number): void {
    if (typeof newSalary !== "number") {
      throw new Error("New salary must be a number");
    }

    if (newSalary < this._salary) {
      throw new Error("The new salary must be greater than the actual salary");
    }

    this._salary = newSalary;
  }

  promotion(newSalary: number): void {
    this.updateSalary(newSalary);
  }
}

const employee1 = new Employee(12, "Joey", 1200);
console.log("employee1 :>> ", employee1);

employee1.promotion(1400);
console.log("employee1 :>> ", employee1.salary);
