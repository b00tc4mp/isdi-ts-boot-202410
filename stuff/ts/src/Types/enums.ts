//Enums
//Solo existe en ts y no en js
//Nos permite definir un set de constantes con nombres, pueden ser de type number o string

enum OrderStatus { // Si no le damos ningun valor, ts le asigna a cada elemnto un numero , empezando por 0
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const isDelivered = (status: OrderStatus): boolean => {
  return status === OrderStatus.DELIVERED;
};

console.log("isDeliverd() :>> ", isDelivered(OrderStatus.PENDING));

enum GameDifficult {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
  INSANE = "insane",
}

interface IPlayer {
  name: string;

  chooseGameDifficult(difficult: GameDifficult): string;
}

class Player implements IPlayer {
  constructor(public name: string) {}

  chooseGameDifficult(difficult: GameDifficult): string {
    if (difficult === GameDifficult.EASY) {
      return `${this.name}, this is gonna be a walk in the park`;
    } else if (difficult === GameDifficult.MEDIUM) {
      return `${this.name}, the adventure it's gonna be funny!`;
    } else if (difficult === GameDifficult.HARD) {
      return `${this.name}, do you think you are ready ?`;
    } else {
      return `${this.name}, abandon all hope ...`;
    }
  }
}

const player1 = new Player("Zer0");
const player1Difficult = player1.chooseGameDifficult(GameDifficult.INSANE);

console.log("player1Difficult :>> ", player1Difficult);
