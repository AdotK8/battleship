// Define the ship class
export default class ship {
  constructor(size, coords) {
    this.size = size;
    this.hits = 0;
    this.coords = coords;
  }
  //logs hits
  hit() {
    return this.hits++;
  }
  //checks if ship is sunk
  isSunk() {
    if (this.hits == this.size) {
      return true;
    } else return false;
  }
}
