import "./styles/styles.css";
import gameboard from "./gameboard";
import player from "./player";
import { displayBoards } from "./UpdatingDom";

//creating players and gameboards
let player1 = new player("ahmed");
let player2 = new player("monica");

let shipCoords1 = {
  0: [5, 4],
  1: [5, 5],
  2: [5, 6],
  3: [5, 7],
  0: [5, 8],
};

let shipCoords2 = {
  0: [4, 1],
  1: [4, 2],
  2: [4, 3],
  3: [4, 4],
};

let shipCoords3 = {
  0: [2, 1],
  1: [2, 2],
  2: [2, 3],
};

let shipCoords4 = {
  0: [1, 5],
  1: [1, 6],
  2: [1, 7],
  3: [1, 8],
};

let shipCoords5 = {
  0: [2, 1],
  1: [2, 2],
  2: [2, 3],
  3: [2, 4],
};

let shipCoords6 = {
  0: [7, 1],
  1: [7, 2],
  2: [7, 3],
};

//creating 3 ships for players
player1.gameboard.createShip(5, shipCoords1);
player1.gameboard.createShip(4, shipCoords2);
player1.gameboard.createShip(3, shipCoords3);
player2.gameboard.createShip(5, shipCoords4);
player2.gameboard.createShip(4, shipCoords5);
player2.gameboard.createShip(3, shipCoords6);

console.log(player1);
console.log(player2);

displayBoards();
