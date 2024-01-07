import ship from "./ship";
import { ships } from "./ship";

export default class gameboard {
  createShip(size, x, y) {
    ships.push(new ship(size, 0, x, y));
  }

  recieveAttack() {}
}
