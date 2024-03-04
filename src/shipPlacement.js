import { startGameDom } from "./UpdatingDom";
import playGame from "./game";
import { playPopSound } from "./sounds";

//initialise ship direction variable to keep track of ship direction
let direction = 0;

//function to handle ship rotation
export function rotateShip() {
  const rotate = document.getElementById("rotate");
  rotate.addEventListener("click", () => {
    if (direction == 0) {
      direction = 1;
      console.log(direction);
    } else if (direction == 1) {
      direction = 0;
    }
  });
}
//function which handles ship placement on gameboard, asynchronously
export async function placeShips() {
  try {
    await placeShip(3, "ship1");

    await placeShip(4, "ship2");

    await placeShip(2, "ship3");

    await placeShip(5, "ship4");

    const startButton = document.querySelector(".start");
    startButton.addEventListener("click", getUserShipCoords);
  } catch (error) {
    console.error("Failed to place ships:", error);
  }
}

//function to place a single ship on gameboard
function placeShip(size, shipNumber) {
  const tiles = document.querySelectorAll(".tile");

  //Add event listeners to each tile for ship placement
  return new Promise((resolve) => {
    tiles.forEach((tile) => {
      tile.addEventListener("mouseenter", handleMouseEnter);
      tile.addEventListener("mouseleave", handleMouseLeave);
      tile.addEventListener("click", handleMouseClick);
    });
    // Remove event listeners after ship placement
    function removeEventListeners() {
      tiles.forEach((tile) => {
        tile.removeEventListener("mouseenter", handleMouseEnter);
        tile.removeEventListener("mouseleave", handleMouseLeave);
        tile.removeEventListener("click", handleMouseClick);
      });
    }

    function handleMouseEnter(event) {
      const tile = event.target;
      let xCord = tile.dataset.x;
      let yCord = tile.dataset.y;
      //paint ships based on dirction
      try {
        if (direction == 1) {
          paintShip(0, 1);
        } else if (direction == 0) {
          paintShip(1, 0);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
      //paint the ship on the board
      function paintShip(x, y) {
        for (let i = 0; i < size; i++) {
          const ship = document.querySelector(
            `[data-x="${Number(xCord) + i * x}"][data-y="${
              Number(yCord) + i * y
            }"]`
          );

          if (ship) {
            if (ship.classList.contains("placedShip")) {
              console.error("Invalid ship placement");
              tile.removeEventListener("click", handleMouseClick);
              return;
            }
            ship.classList.add("prePlacedShip");
          } else {
            console.error("Invalid ship placement");
            tile.removeEventListener("click", handleMouseClick);
            return;
          }
        }
      }
    }
    // Handle mouse leave event during ship placement
    function handleMouseLeave(event) {
      const tile = event.target;
      const ship1 = document.querySelectorAll(".prePlacedShip");
      ship1.forEach((ship) => {
        ship.classList.remove("prePlacedShip");
      });
    }
    // Handle mouse click event for finalizing ship placement
    function handleMouseClick(event) {
      const tile = event.target;
      if (tile.classList.contains("placedShip")) {
      } else {
        // Play sound effect and finalize ship placement
        playPopSound();
        const shipTiles = document.querySelectorAll(".prePlacedShip");
        shipTiles.forEach((tile) => {
          tile.classList.add("placedShip");
          tile.classList.add(shipNumber);
        });
        removeEventListeners();
        resolve();
      }
    }
  });
}
// Function to get user ship coordinates after placement
function getUserShipCoords() {
  // Initialize ship objects to store ship coordinates
  let ship1 = {};
  let ship2 = {};
  let ship3 = {};
  let ship4 = {};
  // Retrieve ship coordinates from the DOM
  for (let i = 1; i <= 4; i++) {
    const ship = document.querySelectorAll(`.ship${i}`);
    for (let j = 0; j < ship.length; j++) {
      const x = parseInt(ship[j].dataset.x);
      const y = parseInt(ship[j].dataset.y);
      // Store ship coordinates in respective ship objects
      switch (i) {
        case 1:
          ship1[j] = [x, y];
          break;
        case 2:
          ship2[j] = [x, y];
          break;
        case 3:
          ship3[j] = [x, y];
          break;
        case 4:
          ship4[j] = [x, y];
          break;
        default:
          break;
      }
    }
  }
  // Start the game after a delay
  startGameDom();
  setTimeout(() => {
    playGame(ship1, ship2, ship3, ship4);
  }, 1000);
}
