import gameboard from "./gameboard";
import player from "./player";

let player1 = new player("ahmed");

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

let attackCoords5 = [4, 1];
let attackCoords6 = [4, 2];
let attackCoords7 = [4, 3];
let attackCoords8 = [4, 4];

let missedShot = [6, 8];

player1.gameboard.createShip(4, coords);
player1.gameboard.createShip(4, coords2);

player1.gameboard.recieveAttack(attackCoords1);
player1.gameboard.recieveAttack(attackCoords2);
player1.gameboard.recieveAttack(attackCoords3);
player1.gameboard.recieveAttack(attackCoords4);

test("ship should be sunk", function () {
  expect(player1.gameboard.ships[0].isSunk()).toBe(true);
});

test("miss is being logged", function () {
  player1.gameboard.recieveAttack(missedShot);
  expect(player1.gameboard.misses[0]).toBe(missedShot);
});

test("all attacks are being logged", function () {
  expect(player1.gameboard.attacks[4]).toBe(missedShot);
});

test("total hits is being logged", function () {
  expect(player1.gameboard.ships[0].hits).toBe(4);
});

test("losing works", function () {
  expect(player1.gameboard.checkWinner()).toBe(false);
});

test("winning works", function () {
  player1.gameboard.recieveAttack(attackCoords5);
  player1.gameboard.recieveAttack(attackCoords6);
  player1.gameboard.recieveAttack(attackCoords7);
  player1.gameboard.recieveAttack(attackCoords8);
  expect(player1.gameboard.checkWinner()).toBe(true);
});
