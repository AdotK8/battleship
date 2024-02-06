const text = document.querySelector(".top-text");

export function displayUsersTurn() {
  text.innerHTML = "attack the enemy";
}

export function displayWin() {
  text.innerHTML = "you won!";
}

export function displayLose() {
  text.innerHTML = "you lost!";
}

export function displayBoard(container) {
  for (let i = 1; i <= 8; i++) {
    let newRow = document.createElement(`div`);
    newRow.classList.add("tile");
    newRow.classList.add("live");
    newRow.dataset.y = i;
    newRow.dataset.x = 1;
    container.appendChild(newRow);

    for (let j = 1; j <= 7; j++) {
      let newTile = document.createElement("div");
      newTile.classList.add("tile");
      newTile.classList.add("live");
      newTile.dataset.y = i;
      newTile.dataset.x = j + 1;
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
      shipTile.classList.add("placedShip");
    }
  }
}

export function displayHit(attackCoords, container) {
  let tile = document.querySelector(
    `${container} [data-x="${attackCoords[0]}"][data-y="${attackCoords[1]}"]`
  );
  tile.classList.add("hit");
}

export function displayMiss(attackCoords, container) {
  let tile = document.querySelector(
    `${container}  [data-x="${attackCoords[0]}"][data-y="${attackCoords[1]}"]`
  );

  tile.classList.add("black");
}

export function startGameDom() {
  displayUsersTurn();

  const placedContainer = document.querySelector(".container1");
  placedContainer.remove();

  const buttons = document.querySelector(".buttons");
  buttons.remove();

  const boardContainer = document.querySelector(".middle");
  const enemyContainer = document.createElement("div");
  const playerContainer = document.createElement("div");

  enemyContainer.classList.add("container2");
  playerContainer.classList.add("container1");

  boardContainer.appendChild(playerContainer);
  boardContainer.appendChild(enemyContainer);

  displayBoard(playerContainer);
  displayBoard(enemyContainer);
}
