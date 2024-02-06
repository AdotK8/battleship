export function generateShips() {
  const boardSize = 8;
  const shipSizes = [2, 3, 4, 5];
  const ships = [];

  function overlaps(shipCoords) {
    for (const ship of ships) {
      for (const coord of ship.coordinates) {
        for (const newCoord of shipCoords) {
          if (coord[0] === newCoord[0] && coord[1] === newCoord[1]) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function generateShipCoordinates(size) {
    const shipCoords = [];
    let row, col;
    let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";

    if (orientation === "horizontal") {
      row = Math.floor(Math.random() * boardSize) + 1;
      col = Math.floor(Math.random() * (boardSize - size)) + 1;
    } else {
      row = Math.floor(Math.random() * (boardSize - size)) + 1;
      col = Math.floor(Math.random() * boardSize) + 1;
    }

    for (let i = 0; i < size; i++) {
      if (orientation === "horizontal") {
        shipCoords.push([row, col + i]);
      } else {
        shipCoords.push([row + i, col]);
      }
    }
    return shipCoords;
  }

  while (ships.length < 4) {
    ships.length = 0;
    let isOverlap = false;
    for (const size of shipSizes) {
      const shipCoords = generateShipCoordinates(size);
      if (overlaps(shipCoords)) {
        isOverlap = true;
        break;
      } else {
        ships.push({ size: size, coordinates: shipCoords });
      }
    }
    if (isOverlap) {
      continue;
    }
  }

  return ships;
}
