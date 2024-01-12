import gameboard from "./gameboard";

export default class player {
  constructor(name) {
    this.name = name;
    this.gameboard = new gameboard();
  }
}
