export default class ship {
  constructor(size, coords) {
    this.size = size;
    this.hits = 0;
    this.coords = coords;
    this.sunk = false;
  }

  hit() {
    console.log("hit registered");
    return this.hits++;
  }

  isSunk() {
    if (this.hits == this.size) {
      this.sunk = true;
      return true;
    } else return false;
  }
}
