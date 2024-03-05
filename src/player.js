import gameboard from "./gameboard";
import { checkNearestNeighbour } from "./nearestNeighbour";

// Define the Player class
export default class player {
  // Constructor method for creating a player object
  constructor(name) {
    this.name = name;
    this.gameboard = new gameboard();
  }
  // Method to send a random attack to the opponent's gameboard
  sendRandomAttack(container) {
    // Generate random coordinates for the attack
    let temp = this.getRandomCoords();
    // Check if the generated coordinates have already been attacked
    const keysArray = Object.keys(this.gameboard.attacks);
    const count = keysArray.length;
    let isValid = true;
    // Loop through the attacked coordinates to check for equality
    for (let i = 0; i < count; i++) {
      if (this.looseArrayEquality(temp, this.gameboard.attacks[i])) {
        isValid = false;
      } else;
    }
    // If the generated coordinates have already been attacked, generate new coordinates
    if (isValid === false) {
      this.sendRandomAttack(container);
    } else {
      // If the generated coordinates are valid, proceed with the attack
      let latestHitElement = document.querySelector(".latest-hit");
      // If there is a latest hit, check for nearest neighbor before attacking
      if (latestHitElement !== null) {
        checkNearestNeighbour(temp, container, this);
        return;
      } else {
        // If no latest hit, directly attack the generated coordinates
        this.gameboard.recieveAttack(temp, container);
        return;
      }
    }
  }
  // Method to generate random attack coordinates
  getRandomCoords() {
    let rndInt = Math.floor(Math.random() * 8) + 1;
    let rndInt2 = Math.floor(Math.random() * 8) + 1;
    return [rndInt, rndInt2];
  }
  // Method to check loose array equality (non-strict)
  looseArrayEquality(temp, attackCord) {
    return temp.every((value, index) => value == attackCord[index]);
  }
}
