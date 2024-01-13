import ship from "./ship";

export default class gameboard {
  constructor() {
    this.misses = {};
    this.attacks = {};

    this.ships = [];
    this.sunkenShips = 0;
  }
  createShip(size, coords) {
    this.ships.push(new ship(size, coords));
  }

  recieveAttack(attackCoords) {
    this.logAttacks(attackCoords);
    let preHits = this.getTotalHits();

    for (let i = 0; i <= this.ships.length - 1; i++) {
      for (let j = 0; j <= this.ships[i].size - 1; j++) {
        if (attackCoords.toString() == this.ships[i].coords[j].toString()) {
          this.ships[i].hit();
          if (this.ships[i].isSunk()) {
            this.sunkenShips++;
          }
        }
      }
    }
    let postHits = this.getTotalHits();

    if (preHits == postHits) {
      this.logMisses(attackCoords);
    } else return;
  }

  getTotalHits() {
    let tempHits = 0;
    for (let i = 0; i < this.ships.length; i++) {
      tempHits = tempHits + this.ships[i].hits;
    }
    return tempHits;
  }

  logMisses(attackCoords) {
    for (let i = 0; i < 64; i++) {
      if (!this.misses[i]) {
        this.misses[i] = attackCoords;
        return;
      }
    }
  }

  logAttacks(attackCoords) {
    for (let i = 0; i < 64; i++) {
      if (!this.attacks[i]) {
        this.attacks[i] = attackCoords;
        return;
      }
    }
  }

  checkWinner() {
    return this.sunkenShips === this.ships.length;
  }
}
