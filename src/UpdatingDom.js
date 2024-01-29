import player from "./player";
import gameboard from "./gameboard";

export function displayBoard(container) {
  for (let i = 1; i <= 8; i++) {
    let newRow = document.createElement(`div`);
    newRow.classList.add("tile");
    newRow.dataset.x = i;
    newRow.dataset.y = 1;
    container.appendChild(newRow);

    for (let j = 1; j <= 7; j++) {
      let newTile = document.createElement("div");
      newTile.classList.add("tile");
      newTile.dataset.x = i;
      newTile.dataset.y = j + 1;
      container.appendChild(newTile);
    }
  }
}

export function displayShips(player, container) {
  for (let i = 0; i < player.gameboard.ships.length; i++) {
    for (let j = 0; j < player.gameboard.ships[i].size; j++) {
      let shipTile = document.querySelector(
        `${container} [data-x="${player.gameboard.ships[i].coords[j][0]}"][data-y="${player.gameboard.ships[i].coords[j][1]}"]`
      );
      shipTile.classList.add("red");
    }
  }
}

export function displayHit(attackCoords, container) {
  let tile = document.querySelector(
    `${container} [data-x="${attackCoords[0]}"][data-y="${attackCoords[1]}"]`
  );

  tile.classList.add("red");
}

export function displayMiss(attackCoords, container) {
  let tile = document.querySelector(
    `${container}  [data-x="${attackCoords[0]}"][data-y="${attackCoords[1]}"]`
  );

  tile.classList.add("black");
}
