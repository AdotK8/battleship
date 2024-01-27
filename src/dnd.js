export function placeShip(size, direction) {
  const tiles = document.querySelectorAll(".tile");

  tiles.forEach((tile) => {
    tile.addEventListener("mouseenter", handleMouseEnter);
    tile.addEventListener("mouseleave", handleMouseLeave);
    tile.addEventListener("click", removeEventListeners);
  });

  function removeEventListeners() {
    tiles.forEach((tile) => {
      tile.removeEventListener("mouseenter", handleMouseEnter);
      tile.removeEventListener("mouseleave", handleMouseLeave);
      tile.removeEventListener("click", removeEventListeners);
    });
  }

  function handleMouseEnter(event) {
    const tile = event.target;
    let xCord = tile.dataset.x;
    let yCord = tile.dataset.y;
    tile.classList.add("red");
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
          ship.classList.add("red");
          ship.classList.add("ship1");
        } else {
          console.error("Invalid ship placement");
          tile.removeEventListener("click", removeEventListeners);
          return;
        }
      }
    }
  }

  function handleMouseLeave(event) {
    const tile = event.target;
    const ship1 = document.querySelectorAll(".ship1");
    ship1.forEach((ship) => {
      ship.classList.remove("red");
      ship.classList.remove("ship1");
    });
  }
}
