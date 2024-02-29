import gameboard from "./gameboard";
import player from "./player";

export function addLatestHitClass(attackArray, container, player) {
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
  } else {
    player.gameboard.recieveAttack(randomAttackArray, container);
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
