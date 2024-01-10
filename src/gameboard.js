import ship from "./ship";
import { ships } from "./ship";

export default class gameboard {
  constructor() {
    this.misses = {
      0: [1, 1],
      1: [1, 2],
    };
  }
  createShip(size, coords) {
    ships.push(new ship(size, coords));
  }

  recieveAttack(attackCoords) {
    let priorHits = this.getTotalHits();

    for (let i = 0; i <= ships.length - 1; i++) {
      for (let j = 0; j <= ships[i].size - 1; j++) {
        if (attackCoords.toString() == ships[i].coords[j].toString()) {
          ships[i].hit();
          ships[i].isSunk();
        }
      }
    }
    let finalHits = this.getTotalHits();

    if (priorHits == finalHits) {
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
    console.log(this.misses);
    for (let i = 0; i < 64; i++) {
      if (!this.misses[i]) {
        console.log("test-hit");
        this.misses[i] = attackCoords;
        console.log(this.misses);
        return;
      }
    }
  }
}
