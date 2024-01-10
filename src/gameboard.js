import ship from "./ship";
import { ships } from "./ship";

export default class gameboard {
  constructor() {
    this.misses = {};
  }
  createShip(size, coords) {
    ships.push(new ship(size, coords));
  }

  recieveAttack(attackCoords) {
    let preHits = this.getTotalHits();

    for (let i = 0; i <= ships.length - 1; i++) {
      for (let j = 0; j <= ships[i].size - 1; j++) {
        if (attackCoords.toString() == ships[i].coords[j].toString()) {
          ships[i].hit();
          ships[i].isSunk();
        }
      }
    }

    let postHits = this.getTotalHits();

    if (preHits == postHits) {
      this.logMisses(attackCoords);
    } else {
      console.log("thats a hit baby");
    }
  }

  getTotalHits() {
    let tempHits = 0;
    for (let i = 0; i <= ships.length - 1; i++) {
      tempHits = tempHits + ships[i].hits;
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
}
