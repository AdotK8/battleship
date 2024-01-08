import "./styles/styles.css";
import { ships } from "./ship";
import gameboard from "./gameboard";

let gameboard1 = new gameboard();

let coords = {
  0: [5, 5],
  1: [5, 6],
  2: [5, 7],
  3: [5, 8],
};

gameboard1.createShip(4, coords, 0);
