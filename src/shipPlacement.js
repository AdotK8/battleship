export async function placeShips() {
  try {
    // Place the first ship
    await placeShip(3, 1, "ship1");
    console.log("First ship placed successfully!");

    // Place the second ship
    await placeShip(4, 0, "ship2");
    console.log("Second ship placed successfully!");

    // Place the third ship
    await placeShip(2, 1, "ship3");
    console.log("Second ship placed successfully!");

    // Place the fourth ship
    await placeShip(5, 0, "ship4");
    console.log("Second ship placed successfully!");

    // Place additional ships as needed

    // All ships placed successfully
    console.log("All ships placed successfully!");
  } catch (error) {
    console.error("Failed to place ships:", error);
    // Handle errors if ship placement fails
  }
}

function placeShip(size, direction, shipNumber) {
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
