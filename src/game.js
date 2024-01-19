import player from "./player";
import gameboard from "./gameboard";

export default function playGame(player1, player2) {
  const divs = document.querySelectorAll(`.container2 .tile`);

  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function eventHandler() {
      let clickedCoords = [Number(this.dataset.x), Number(this.dataset.y)];
      player2.gameboard.recieveAttack(clickedCoords);
      divs[i].removeEventListener("click", eventHandler);
    });
  }
}
