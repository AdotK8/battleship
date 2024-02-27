export default class ship {
  constructor(size, coords) {
    this.size = size;
    this.hits = 0;
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

// when player hits computer
// also add latest-hit class to element
// loop through computers ships, match coords with latest-hit array
// try to attack all 4 of  adjacent spaces of the latest-hit class.
// only allow the attack if the .live class is on the element
// if miss - carry on checking 4 radius
// if hit, remove lates-hit class from previous element
// add latest-hit class to current hit and start again, new 4 radius
// if no .live in 4 radius go to random attack
