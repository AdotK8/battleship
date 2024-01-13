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

test("checks for existing shots working", function () {
  player1.gameboard.attacks = {
    0: [1, 1],
    1: [1, 2],
    2: [1, 3],
    3: [1, 4],
    4: [1, 5],
    5: [1, 6],
    6: [1, 7],
    7: [1, 8],
    8: [2, 1],
    9: [2, 2],
    10: [2, 3],
    11: [2, 4],
    12: [2, 5],
    13: [2, 6],
    14: [2, 7],
    15: [2, 8],
    16: [3, 1],
    17: [3, 2],
    18: [3, 3],
    19: [3, 4],
    20: [3, 5],
    21: [3, 6],
    22: [3, 7],
    23: [3, 8],
    24: [4, 1],
    25: [4, 2],
    26: [4, 3],
    27: [4, 4],
    28: [4, 5],
    29: [4, 6],
    30: [4, 7],
    31: [4, 8],
    32: [5, 1],
    33: [5, 2],
    34: [5, 3],
    35: [5, 4],
    36: [5, 5],
    37: [5, 6],
    38: [5, 7],
    39: [5, 8],
    40: [6, 1],
    41: [6, 2],
    42: [6, 3],
    43: [6, 4],
    44: [6, 5],
    45: [6, 6],
    46: [6, 7],
    47: [6, 8],
    48: [7, 1],
    49: [7, 2],
    50: [7, 3],
    51: [7, 4],
    52: [7, 5],
    53: [7, 6],
    54: [7, 7],
    55: [7, 8],
    56: [8, 1],
    57: [8, 2],
    58: [8, 3],
    59: [8, 4],
    60: [8, 5],
    61: [8, 6],
    62: [8, 7],
  };
  player1.sendRandomAttack();

  expect(player1.gameboard.attacks).toHaveProperty("63", [8, 8]);
});
