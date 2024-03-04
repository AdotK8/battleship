import ship from "./ship";
import { displayHit } from "./UpdatingDom";
import { displayMiss } from "./UpdatingDom";
import { playHitSound, playMissSound } from "./sounds";
import toggleLatestHitClass from "./nearestNeighbour";

export default class gameboard {
  constructor() {
    // Initialize properties to track attacks, ships, and sunken ships
    this.attacks = {};
    this.ships = [];
    this.sunkenShips = 0;
  }
  // Method to create a new ship with specified size and coordinates
  createShip(size, coords) {
    this.ships.push(new ship(size, coords));
  }
  // Method to handle receiving an attack at specified coordinates and container
  recieveAttack(attackCoords, container) {
    this.logAttacks(attackCoords);
    let preHits = this.getTotalHits();

    // Iterate over each ship to check if it's hit
    for (let i = 0; i <= this.ships.length - 1; i++) {
      // Iterate over each coordinate of the current ship
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
  // Method to calculate the total hits on all ships
  getTotalHits() {
    let tempHits = 0;
    for (let i = 0; i < this.ships.length; i++) {
      tempHits = tempHits + this.ships[i].hits;
    }
    return tempHits;
  }
  // Method to log attacks in the attacks object
  logAttacks(attackCoords) {
    for (let i = 0; i < 64; i++) {
      if (!this.attacks[i]) {
        this.attacks[i] = attackCoords;
        return;
      }
    }
  }
  // Method to check if the player lost the game by sinking all ships
  checkIfLost() {
    return this.sunkenShips === this.ships.length;
  }
}
