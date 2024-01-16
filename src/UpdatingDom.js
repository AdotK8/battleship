export function displayBoards() {
  const container1 = document.querySelector(".container1");
  const container2 = document.querySelector(".container2");

  for (let i = 0; i < 8; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    container1.appendChild(newRow);

    for (let j = 0; j < 7; j++) {
      let newTile = document.createElement("div");
      newTile.classList.add("tile");
      container1.appendChild(newTile);
    }
  }
}
