class User {
  constructor(private _name: string) {}

  public get name(): string {
    return this._name;
  }
}

const userA = new User("Pep");

console.log("userA.get :>> ", userA.name);
