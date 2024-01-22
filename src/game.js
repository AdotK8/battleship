import player from "./player";
import gameboard from "./gameboard";

export default function playGame(player1, player2) {
  userSelectAttack(player2);
}

function userSelectAttack(player2) {
  const divs = document.querySelectorAll(`.container2 .tile.live`);

  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function eventHandler() {
      console.log("test");
      divs[i].classList.remove("live");
      let clickedCoords = [Number(this.dataset.x), Number(this.dataset.y)];
      player2.gameboard.recieveAttack(clickedCoords, ".container2");
      divss[i].removeEventListener("click", eventHandler);
    });
  }
}
