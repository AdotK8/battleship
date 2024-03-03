import ship from "./ship";
import { displayHit } from "./UpdatingDom";
import { displayMiss } from "./UpdatingDom";
import { playHitSound, playMissSound } from "./sounds";
import toggleLatestHitClass from "./nearestNeighbour";

export default class gameboard {
  constructor() {
    this.attacks = {};
    this.ships = [];
    this.sunkenShips = 0;
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
          if (container == ".container1") {
            toggleLatestHitClass(attackCoords);
          }
          this.ships[i].hit();
          playHitSound();
          displayHit(attackCoords, container);

          if (this.ships[i].isSunk()) {
            this.sunkenShips++;
            this.checkIfLost();
          }
        }
      }
    }
    let postHits = this.getTotalHits();

    if (preHits == postHits) {
      playMissSound();
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
