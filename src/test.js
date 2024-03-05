jest.mock("./updatingDom", () => ({
  displayHit: jest.fn(),
  displayMiss: jest.fn(),
}));

jest.mock("./sounds", () => ({
  playHitSound: jest.fn(),
  playMissSound: jest.fn(),
}));

import player from "./player";

describe("suite 1 (gameboard Suite)", () => {
  let player1 = new player("player");

  let playerShip1 = {
    0: [5, 5],
    1: [5, 6],
  };

  let playerShip2 = {
    0: [4, 1],
    1: [4, 2],
    2: [4, 3],
  };

  player1.gameboard.createShip(2, playerShip1);
  player1.gameboard.createShip(3, playerShip2);

  let attackCoords1 = [5, 5];
  let attackCoords2 = [5, 6];
  let attackCoords3 = [4, 1];
  let attackCoords4 = [4, 2];
  let attackCoords5 = [4, 3];

  player1.gameboard.recieveAttack(attackCoords1);
  player1.gameboard.recieveAttack(attackCoords2);

  test("ship should be sunk", function () {
    expect(player1.gameboard.ships[0].isSunk()).toBe(true);
  });

  test("all attacks are being logged", function () {
    let missedShot = [6, 8];
    player1.gameboard.recieveAttack(missedShot);
    expect(player1.gameboard.attacks[2]).toBe(missedShot);
  });

  test("total hits is being logged", function () {
    expect(player1.gameboard.ships[0].hits).toBe(2);
  });

  test("losing works", function () {
    expect(player1.gameboard.checkIfLost()).toBe(false);
  });

  test("winning works", function () {
    player1.gameboard.recieveAttack(attackCoords3);
    player1.gameboard.recieveAttack(attackCoords4);
    player1.gameboard.recieveAttack(attackCoords5);
    expect(player1.gameboard.checkIfLost()).toBe(true);
  });
});

import { generateShips } from "./generateShips";

describe("suite 2 (senerate ships suite)", () => {
  describe("generateShips function", () => {
    test("it should generate ships with correct sizes and coordinates", () => {
      const ships = generateShips();

      expect(ships).toBeTruthy();

      expect(ships.length).toBe(4);

      for (const ship of ships) {
        expect([2, 3, 4, 5]).toContain(ship.size);

        for (const coord of ship.coordinates) {
          expect(coord[0]).toBeGreaterThanOrEqual(1);
          expect(coord[0]).toBeLessThanOrEqual(8);
          expect(coord[1]).toBeGreaterThanOrEqual(1);
          expect(coord[1]).toBeLessThanOrEqual(8);
        }
      }

      // Check if ships don't overlap
      for (let i = 0; i < ships.length; i++) {
        for (let j = i + 1; j < ships.length; j++) {
          for (const coord of ships[i].coordinates) {
            for (const otherCoord of ships[j].coordinates) {
              expect(coord).not.toEqual(otherCoord);
            }
          }
        }
      }
    });
  });
});

import { getAdjacentCoordinates } from "./nearestNeighbour";

describe("suite 3 (get adjacent coordinates suite)", () => {
  test("should return adjacent coordinates when the coordinatesArray represents a horizontal line", () => {
    const coordinatesArray = [
      [3, 3],
      [3, 4],
      [3, 5],
    ];
    const expectedAdjacentCoordinates = [
      [3, 2],
      [3, 6],
    ];

    expect(getAdjacentCoordinates(coordinatesArray)).toEqual(
      expectedAdjacentCoordinates
    );
  });

  test("should return adjacent coordinates when the coordinatesArray represents a vertical line", () => {
    const coordinatesArray = [
      [3, 3],
      [4, 3],
      [5, 3],
    ];
    const expectedAdjacentCoordinates = [
      [2, 3],
      [6, 3],
    ];

    expect(getAdjacentCoordinates(coordinatesArray)).toEqual(
      expectedAdjacentCoordinates
    );
  });

  test("should return adjacent coordinates when the coordinatesArray represents a single point", () => {
    const coordinatesArray = [[3, 3]];
    const expectedAdjacentCoordinates = [
      [2, 3],
      [4, 3],
      [3, 2],
      [3, 4],
    ];

    expect(getAdjacentCoordinates(coordinatesArray)).toEqual(
      expectedAdjacentCoordinates
    );
  });
});
