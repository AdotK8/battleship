import ship from "./ship";
import { ships } from "./ship";

export default class gameboard {
  createShip(size, coords) {
    ships.push(new ship(size, 0, coords));
    console.log(ships[0].coords);
  }
}
