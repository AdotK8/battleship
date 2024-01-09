export default class ship {
  constructor(size, hits, coords) {
    this.size = size;
    this.hits = hits;
    this.coords = coords;
  }

  hit() {
    console.log("hit registered");
    return this.hits++;
  }

  isSunk() {
    if (this.hits == this.size) {
      console.log("this ship is sunk");
      return true;
    } else return false;
  }
}

export const ships = [];
