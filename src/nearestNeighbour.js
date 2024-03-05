// Function to add the "latest-hit" class to the tile representing the latest attack
export function addLatestHitClass(attackArray) {
  let latestHitTile = document.querySelector(
    `.container1 [data-x="${attackArray[0]}"][data-y="${attackArray[1]}"]`
  );
  latestHitTile.classList.add("latest-hit");
}

// Function to remove the "latest-hit" class from the tile
export function removeLatestHitClass() {
  let latestHitElement = document.querySelector(".latest-hit");

  if (latestHitElement !== null) {
    latestHitElement.classList.remove("latest-hit");
  }
}

// Function to toggle the "latest-hit" class on and off based on the attackArray
export default function toggleLatestHitClass(attackArray) {
  let latestHitElement = document.querySelector(".latest-hit");

  if (latestHitElement !== null) {
    removeLatestHitClass();
    addLatestHitClass(attackArray);
  } else {
    addLatestHitClass(attackArray);
  }
}

// Function to check the nearest neighbor for the latest hit and attack if available
export function checkNearestNeighbour(randomAttackArray, container, player) {
  let latestHitElement = document.querySelector(".latest-hit");
  // Extract the coordinates of the latest hit from the element's dataset
  let latestHitArray = [
    Number(latestHitElement.dataset.x),
    Number(latestHitElement.dataset.y),
  ];

  // Find adjacent positions to the latest hit
  let adjacentPositions = findAdjacentPositions(latestHitArray);
  // Check for live hits in the adjacent positions
  let liveHits = checkForLiveHits(adjacentPositions);

  // If live hits are available, attack a random live hit
  if (liveHits.length > 0) {
    let randomIndex = Math.floor(Math.random() * liveHits.length);
    let randomPosition = liveHits[randomIndex];
    player.gameboard.recieveAttack(randomPosition, container);
    console.log(player);
  } else {
    // If no live hits are available, check for unsunk ships for hits
    checksUnsunkShipsForHits(randomAttackArray, container, player);
  }
}

// Other helper functions follow...

function checksUnsunkShipsForHits(randomAttackArray, container, player) {
  let shipsState = player.gameboard.ships;
  let shipFound = false;

  for (let ship of shipsState) {
    if (ship.hits >= 1 && ship.hits < ship.size) {
      shipFound = true;
      let shipHitsArray = getArray(ship);
      let adjacentArray = getAdjacentCoordinates(shipHitsArray);
      attackEndOfShip(adjacentArray, container, player);
      break;
    }
  }

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

export function getAdjacentCoordinates(coordinatesArray) {
  let adjacentCoordinates = [];

  if (coordinatesArray.length === 1) {
    let [x, y] = coordinatesArray[0];

    const minX = 1;
    const minY = 1;
    const maxX = 8;
    const maxY = 8;

    // Check for adjacent coordinates within the boundaries
    if (x - 1 >= minX) adjacentCoordinates.push([x - 1, y]);
    if (x + 1 <= maxX) adjacentCoordinates.push([x + 1, y]);
    if (y - 1 >= minY) adjacentCoordinates.push([x, y - 1]);
    if (y + 1 <= maxY) adjacentCoordinates.push([x, y + 1]);
  } else {
    // Case when coordinatesArray represents a range of coordinates
    let firstCoordinate = coordinatesArray[0];
    let lastCoordinate = coordinatesArray[coordinatesArray.length - 1];

    const minX = 1;
    const minY = 1;
    const maxX = 8;
    const maxY = 8;

    if (firstCoordinate[0] === lastCoordinate[0]) {
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

function isValidPosition(x, y) {
  return x >= 1 && x <= 8 && y >= 1 && y <= 8;
}

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
