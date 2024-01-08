export default class ship {
  constructor(size, hits, coords) {
    this.size = size;
    this.hits = hits;
    this.coords = coords;
  }

  hit() {
    return this.hits++;
  }

  isSunk() {
    if (this.hits == this.size) {
      return true;
    } else return false;
  }
}

export const ships = [];
