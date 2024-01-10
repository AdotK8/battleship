export default class ship {
  constructor(size, coords) {
    this.size = size;
    this.hits = 0;
    this.coords = coords;
  }

  hit() {
    console.log("hit registered");
    return this.hits++;
  }

  isSunk() {
    if (this.hits == this.size) {
      return true;
    } else return false;
  }
}

export const ships = [];
