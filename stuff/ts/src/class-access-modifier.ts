abstract class Animal {
  private _age: number = 0; //year

  constructor(
    public name: string,
    public specie: string,
    public color: string
  ) {}

  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge > 20) {
      throw new Error("That its imposible ...");
    }

    this._age = newAge;
  }

  abstract makeNoise(noise: string): void;

  eat(food: string): string {
    return `${this.name} is eating ${food}`;
  }
}

class Cat extends Animal {
  constructor(name: string, specie: string, color: string) {
    super(name, specie, color);
  }

  makeNoise(noise: string): void {
    console.log(noise);
  }
}

const cat = new Cat("Nori", "siamese", "black");

cat.makeNoise("Miaaaaahogoooo");

console.log(cat.eat("whiskas"));

export default Animal;
