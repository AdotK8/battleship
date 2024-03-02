import { startGameDom } from "./UpdatingDom";
import playGame from "./game";
import { playPopSound } from "./sounds";

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
            ship.classList.add("prePlacedShip");
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
      const ship1 = document.querySelectorAll(".prePlacedShip");
      ship1.forEach((ship) => {
        ship.classList.remove("prePlacedShip");
      });
    }

    function handleMouseClick(event) {
      const tile = event.target;
      if (tile.classList.contains("placedShip")) {
      } else {
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

  startGameDom();

  setTimeout(() => {
    playGame(ship1, ship2, ship3, ship4);
  }, 1000);
}
