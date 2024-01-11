import "./styles/styles.css";
import gameboard from "./gameboard";

let gameboard1 = new gameboard();

let coords = {
  0: [5, 5],
  1: [5, 6],
  2: [5, 7],
  3: [5, 8],
};

let coords2 = {
  0: [4, 1],
  1: [4, 2],
  2: [4, 3],
  3: [4, 4],
};

let attackCoords1 = [5, 5];
let attackCoords2 = [5, 6];
let attackCoords3 = [5, 7];
let attackCoords4 = [5, 8];

gameboard1.createShip(4, coords);
gameboard1.createShip(4, coords2);
gameboard1.recieveAttack(attackCoords1);
gameboard1.recieveAttack(attackCoords2);
gameboard1.recieveAttack(attackCoords3);
gameboard1.recieveAttack(attackCoords4);
