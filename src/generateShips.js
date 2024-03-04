export function generateShips() {
  // define board size, possible ship sizes, and initialise array
  const boardSize = 8;
  const shipSizes = [2, 3, 4, 5];
  const ships = [];

  // Function to check if new ship coordinates overlap with existing ships
  function overlaps(shipCoords) {
    for (const ship of ships) {
      for (const coord of ship.coordinates) {
        for (const newCoord of shipCoords) {
          if (coord[0] === newCoord[0] && coord[1] === newCoord[1]) {
            return true; // If overlap found, return true
          }
        }
      }
    }
    return false; // Return false if no overlap found
  }

  // Function to generate coordinates for a ship of given size
  function generateShipCoordinates(size) {
    const shipCoords = [];
    let row, col;
    //randomly determine ship direction
    let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";

    if (orientation === "horizontal") {
      // Generate random row and column for horizontal orientation
      row = Math.floor(Math.random() * boardSize) + 1;
      col = Math.floor(Math.random() * (boardSize - size)) + 1;
    } else {
      // Generate random row and column for vertical orientation
      row = Math.floor(Math.random() * (boardSize - size)) + 1;
      col = Math.floor(Math.random() * boardSize) + 1;
    }
    // Generate ship coordinates based on orientation and size
    for (let i = 0; i < size; i++) {
      if (orientation === "horizontal") {
        shipCoords.push([row, col + i]);
      } else {
        shipCoords.push([row + i, col]);
      }
    }
    return shipCoords; // Return the generated ship coordinates
  }

  // Loop until 4 non-overlapping ships are generated
  while (ships.length < 4) {
    ships.length = 0;
    let isOverlap = false;
    // Generate ships of each size and check for overlaps
    for (const size of shipSizes) {
      const shipCoords = generateShipCoordinates(size);
      if (overlaps(shipCoords)) {
        isOverlap = true;
        break; // Exit loop if overlap found
      } else {
        ships.push({ size: size, coordinates: shipCoords }); // Add non-overlapping ship to the ships array
      }
    }
    if (isOverlap) {
      continue; // Continue to next iteration if overlap found
    }
  }

  return ships; // Return the generated non-overlapping ships
}
