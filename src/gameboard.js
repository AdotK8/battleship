import ship from "./ship";
import { ships } from "./ship";

export default class gameboard {
  createShip(size, coords) {
    ships.push(new ship(size, 0, coords));
  }

  recieveAttack(attackCoords) {
    for (let i = 0; i <= ships.length - 1; i++) {
      for (let j = 0; j <= ships[i].size - 1; j++) {
        if (attackCoords.toString() == ships[i].coords[j].toString()) {
          console.log("thats a hit baby");
          ships[i].hit();
          ships[i].isSunk();
        }
      }
    }
  }
}
