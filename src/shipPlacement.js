import { startGameDom } from "./UpdatingDom";
import playGame from "./game";

let direction = 0;

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

export async function placeShips() {
  try {
    // Place the first ship
    await placeShip(3, "ship1");
    console.log("First ship placed successfully!");

    // Place the second ship
    await placeShip(4, "ship2");
    console.log("Second ship placed successfully!");

    // Place the third ship
    await placeShip(2, "ship3");
    console.log("Third ship placed successfully!");

    // Place the fourth ship
    await placeShip(5, "ship4");
    console.log("Fourth ship placed successfully!");

    // Place additional ships as needed

    // All ships placed successfully
    console.log("All ships placed successfully!");
    const startButton = document.querySelector(".start");
    startButton.addEventListener("click", startGame);
  } catch (error) {
    console.error("Failed to place ships:", error);
    // Handle errors if ship placement fails
  }
}

function placeShip(size, shipNumber) {
  const tiles = document.querySelectorAll(".tile");

  return new Promise((resolve, reject) => {
    tiles.forEach((tile) => {
      tile.addEventListener("mouseenter", handleMouseEnter);
      tile.addEventListener("mouseleave", handleMouseLeave);
      tile.addEventListener("click", handleMouseClick);
    });

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
      try {
        if (direction == 1) {
          paintShip(0, 1);
        } else if (direction == 0) {
          paintShip(1, 0);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }

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
            ship.classList.add("red");
          } else {
            console.error("Invalid ship placement");
            tile.removeEventListener("click", handleMouseClick);
            return;
          }
        }
      }
    }

    function handleMouseLeave(event) {
      const tile = event.target;
      const ship1 = document.querySelectorAll(".red");
      ship1.forEach((ship) => {
        ship.classList.remove("red");
      });
    }

    function handleMouseClick(event) {
      const shipTiles = document.querySelectorAll(".red");
      shipTiles.forEach((tile) => {
        tile.classList.add("placedShip");
        tile.classList.add(shipNumber);
      });
      removeEventListeners();
      resolve();
    }
  });
}

function startGame() {
  startGameDom();
  getUserShipCoords();
}

function getUserShipCoords() {
  let ship1 = {};
  let ship2 = {};
  let ship3 = {};
  let ship4 = {};

  for (let i = 1; i <= 4; i++) {
    const ship = document.querySelectorAll(`.ship${i}`);
    for (let j = 0; j < ship.length; j++) {
      const x = parseInt(ship[j].dataset.x);
      const y = parseInt(ship[j].dataset.y);
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

  playGame(ship1, ship2, ship3, ship4);
}
