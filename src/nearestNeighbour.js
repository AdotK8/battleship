import gameboard from "./gameboard";
import player from "./player";

export function addLatestHitClass(attackArray) {
  let latestHitTile = document.querySelector(
    `.container1 [data-x="${attackArray[0]}"][data-y="${attackArray[1]}"]`
  );
  latestHitTile.classList.add("latest-hit");
}

export function removeLatestHitClass() {
  let latestHitElement = document.querySelector(".latest-hit");

  if (latestHitElement !== null) {
    latestHitElement.classList.remove("latest-hit");
  }
}

export default function toggleLatestHitClass(attackArray) {
  let latestHitElement = document.querySelector(".latest-hit");

  if (latestHitElement !== null) {
    removeLatestHitClass();
    addLatestHitClass(attackArray);
  } else {
    addLatestHitClass(attackArray);
  }
}

export function checkNearestNeighbour(randomAttackArray, container, player) {
  let latestHitElement = document.querySelector(".latest-hit");
  let latestHitArray = [
    Number(latestHitElement.dataset.x),
    Number(latestHitElement.dataset.y),
  ];

  let adjacentPositions = findAdjacentPositions(latestHitArray);
  let liveHits = checkForLiveHits(adjacentPositions);

  if (liveHits.length > 0) {
    let randomIndex = Math.floor(Math.random() * liveHits.length);

    // Get the random position from liveHits array
    let randomPosition = liveHits[randomIndex];

    // Call receiveAttack on the random position
    player.gameboard.recieveAttack(randomPosition, container);
    console.log(player);
  } else {
    checksUnsunkShipsForHits(randomAttackArray, container, player);
  }
}

function checksUnsunkShipsForHits(randomAttackArray, container, player) {
  let shipsState = player.gameboard.ships;
  let shipFound = false;

  for (let ship of shipsState) {
    // Check if the ship has not been sunk and has 2 or more hits
    if (ship.hits >= 2 && ship.hits < ship.size) {
      shipFound = true;
      let shipHitsArray = getArray(ship);
      let adjacentArray = getAdjacentCoordinates(shipHitsArray);
      attackEndOfShip(adjacentArray, container, player);
      break; // Exit the loop and the function
    }
  }
  // If no ship meets the criteria, proceed with attack
  if (!shipFound) {
    player.gameboard.recieveAttack(randomAttackArray, container);
  }
}

function getArray(ship) {
  let hitShipArray = [];
  for (let i = 0; i < ship.size; i++) {
    let x = ship.coords[i][0];
    let y = ship.coords[i][1];

    let element = document.querySelector(
      `.container1 [data-x="${x}"][data-y="${y}"]`
    );

    if (!element.classList.contains("live")) {
      hitShipArray.push([x, y]);
    }
  }
  return hitShipArray;
}

function getAdjacentCoordinates(coordinatesArray) {
  let adjacentCoordinates = [];

  // Assuming coordinatesArray contains at least one coordinate pair
  let firstCoordinate = coordinatesArray[0];
  let lastCoordinate = coordinatesArray[coordinatesArray.length - 1];

  // Define the bounds of the board
  const boardSize = 8;
  const minX = 1;
  const minY = 1;
  const maxX = boardSize;
  const maxY = boardSize;

  // Check if the coordinates are arranged horizontally or vertically
  if (firstCoordinate[0] === lastCoordinate[0]) {
    // Horizontal arrangement
    let x = firstCoordinate[0];
    let startY = Math.max(
      minY,
      Math.min(firstCoordinate[1], lastCoordinate[1]) - 1
    );
    let endY = Math.min(
      maxY,
      Math.max(firstCoordinate[1], lastCoordinate[1]) + 1
    );

    for (let y = startY; y <= endY; y++) {
      if (!coordinatesArray.some((coord) => coord[1] === y)) {
        adjacentCoordinates.push([x, y]);
      }
    }
  } else if (firstCoordinate[1] === lastCoordinate[1]) {
    // Vertical arrangement
    let y = firstCoordinate[1];
    let startX = Math.max(
      minX,
      Math.min(firstCoordinate[0], lastCoordinate[0]) - 1
    );
    let endX = Math.min(
      maxX,
      Math.max(firstCoordinate[0], lastCoordinate[0]) + 1
    );

    for (let x = startX; x <= endX; x++) {
      if (!coordinatesArray.some((coord) => coord[0] === x)) {
        adjacentCoordinates.push([x, y]);
      }
    }
  }

  return adjacentCoordinates;
}

function attackEndOfShip(adjacentArray, container, player) {
  for (let i = 0; i < adjacentArray.length; i++) {
    let x = adjacentArray[i][0];
    let y = adjacentArray[i][1];

    let element = document.querySelector(
      `.container1 [data-x="${x}"][data-y="${y}"]`
    );

    if (element.classList.contains("live")) {
      player.gameboard.recieveAttack([x, y], container);
    }
  }
}

//checks if elelemnt is within board constraints
function isValidPosition(x, y) {
  return x >= 1 && x <= 8 && y >= 1 && y <= 8;
}

//functions which takes in array, and returns all adjacent elements of the array
function findAdjacentPositions(latestHitArray) {
  let adjacentPositions = [];
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let dir of directions) {
    let adjacentX = latestHitArray[0] + dir[0];
    let adjacentY = latestHitArray[1] + dir[1];

    if (isValidPosition(adjacentX, adjacentY)) {
      adjacentPositions.push([adjacentX, adjacentY]);
    }
  }

  return adjacentPositions;
}

// Function to check for live hits among adjacent positions
function checkForLiveHits(adjacentPositions) {
  let liveHits = [];

  adjacentPositions.forEach((position) => {
    let x = position[0];
    let y = position[1];

    let element = document.querySelector(
      `.container1 [data-x="${x}"][data-y="${y}"]`
    );

    if (element && element.classList.contains("live")) {
      liveHits.push(position);
    }
  });

  return liveHits;
}
