import gameboard from "./gameboard";

export default class player {
  constructor(name) {
    this.name = name;
    this.gameboard = new gameboard();
  }

  sendRandomAttack(container) {
    let temp = this.getRandomCoords();
    const keysArray = Object.keys(this.gameboard.attacks);
    const count = keysArray.length;
    let isValid = true;

    for (let i = 0; i < count; i++) {
      if (this.looseArrayEquality(temp, this.gameboard.attacks[i])) {
        isValid = false;
      } else;
    }

    if (isValid == false) {
      this.sendRandomAttack(container);
    } else {
      this.gameboard.recieveAttack(temp, container);
      return;
    }
  }

  getRandomCoords() {
    let rndInt = Math.floor(Math.random() * 8) + 1;
    let rndInt2 = Math.floor(Math.random() * 8) + 1;
    return [rndInt, rndInt2];
  }

  looseArrayEquality(temp, attackCord) {
    return temp.every((value, index) => value == attackCord[index]);
  }
}
