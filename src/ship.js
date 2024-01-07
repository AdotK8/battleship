export default class ship {
  constructor(size, hits, xCoord, yCoord) {
    this.size = size;
    this.hits = hits;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
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
