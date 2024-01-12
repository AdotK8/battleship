import "./styles/styles.css";
import gameboard from "./gameboard";
import player from "./player";

let player1 = new player("ahmed");

let player2 = new player("monica");

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

let coords3 = {
  0: [2, 1],
  1: [2, 2],
  2: [2, 3],
};

let attackCoords1 = [5, 5];
let attackCoords2 = [5, 6];
let attackCoords3 = [5, 7];
let attackCoords4 = [5, 8];

let attackCoords5 = [4, 1];
let attackCoords6 = [4, 2];
let attackCoords7 = [4, 3];
let attackCoords8 = [4, 4];

let missedShot = [6, 8];

player1.gameboard.createShip(4, coords);
player1.gameboard.createShip(4, coords2);

player1.gameboard.createShip(3, coords3);

player1.gameboard.recieveAttack(attackCoords1);
player1.gameboard.recieveAttack(attackCoords2);
player1.gameboard.recieveAttack(attackCoords3);
player1.gameboard.recieveAttack(attackCoords4);
player1.gameboard.recieveAttack(attackCoords5);
player1.gameboard.recieveAttack(attackCoords6);
player1.gameboard.recieveAttack(attackCoords7);
player1.gameboard.recieveAttack(attackCoords8);

player1.sendRandomAttack();
console.log(player1.gameboard.attacks);
console.log(player1.gameboard.misses);
