import "./styles/styles.css";
import gameboard from "./gameboard";
import player from "./player";
import { displayBoard } from "./UpdatingDom";
import { displayShips } from "./UpdatingDom";
import playGame from "./game";

//creating players and gameboards
let player1 = new player("ahmed");
let player2 = new player("monica");

let shipCoords1 = {
  0: [6, 4],
  1: [6, 5],
  2: [6, 6],
  3: [6, 7],
  4: [6, 8],
};

let shipCoords2 = {
  0: [4, 2],
  1: [4, 3],
  2: [4, 4],
  3: [4, 5],
};

let shipCoords3 = {
  0: [2, 1],
  1: [2, 2],
  2: [2, 3],
};

let shipCoords4 = {
  0: [1, 4],
  1: [1, 5],
  2: [1, 6],
  3: [1, 7],
  4: [1, 8],
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

const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

displayBoard(container1);
displayBoard(container2);
// displayShips(player1, ".container1");

playGame(player1, player2);
