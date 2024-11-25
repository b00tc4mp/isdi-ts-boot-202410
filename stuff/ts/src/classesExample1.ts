import validateHealthAmount from "./validate";

type PlayerKind = "fighter" | "swordman" | "gunman";

class Player {
  protected _health: number = 15;

  constructor(private name: string, private kind: PlayerKind) {}

  get health(): number {
    return this._health;
  }

  get userInfo(): string {
    return `Player name: ${this.name}\nPlayer kind: ${this.kind}`;
  }

  set playerKind(kind: PlayerKind) {
    this.kind = kind;
  }
}

const player1 = new Player("Mario", "fighter");
console.log(player1);
console.log(player1.userInfo);

console.log(player1.health);

player1.playerKind = "swordman";
console.log(player1.userInfo);

interface ICharacter {
  gainHealth(amount: number): void;
  loseHealth(amount: number): void;
}

class MainCharacter extends Player implements ICharacter {
  constructor(name: string, kind: PlayerKind) {
    super(name, kind);
  }

  gainHealth(amount: number): void {
    validateHealthAmount(amount);

    this._health += amount;
  }

  loseHealth(amount: number): void {
    validateHealthAmount(amount);

    this._health -= amount;
  }
}

const kratos = new MainCharacter("Kratos", "fighter");
console.log("kratos :>> ", kratos);

console.log(kratos.userInfo);

console.log("kratos.health :>> ", kratos.health);

console.log("Kratos gain 10 points of health");
kratos.gainHealth(10);
console.log("kratos.health :>> ", kratos.health);

console.log("Kratos lose 5 points of health");
kratos.loseHealth(5);
console.log("kratos.health :>> ", kratos.health);
