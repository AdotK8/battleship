import ship from "./ship";
import { displayHit } from "./UpdatingDom";
import { displayMiss } from "./UpdatingDom";

export default class gameboard {
  constructor() {
    this.misses = {};
    this.attacks = {};
    this.ships = [];
    this.sunkenShips = 0;
    this.turns = 0;
  }
  createShip(size, coords) {
    this.ships.push(new ship(size, coords));
  }

  recieveAttack(attackCoords, container) {
    this.logAttacks(attackCoords);
    let preHits = this.getTotalHits();

    for (let i = 0; i <= this.ships.length - 1; i++) {
      for (let j = 0; j <= this.ships[i].size - 1; j++) {
        if (attackCoords.toString() == this.ships[i].coords[j]) {
          this.turns++;
          this.ships[i].hit();
          displayHit(attackCoords, container);
          if (this.ships[i].isSunk()) {
            console.log("this shit sunk");
            this.sunkenShips++;
            this.checkIfLost();
          }
        }
      }
    }
    let postHits = this.getTotalHits();

    if (preHits == postHits) {
      this.logMisses(attackCoords);
      this.turns++;
      displayMiss(attackCoords, container);
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

  checkIfLost() {
    return this.sunkenShips === this.ships.length;
  }
}
