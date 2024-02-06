import player from "./player";
import gameboard from "./gameboard";
import { displayBoard } from "./UpdatingDom";
import { displayShips } from "./UpdatingDom";

export default function playGame(
  shipCoords1,
  shipCoords2,
  shipCoords3,
  shipCoords4
) {
  let player1 = new player("player");
  let player2 = new player("computer");

  player1.gameboard.createShip(3, shipCoords1);
  player1.gameboard.createShip(4, shipCoords2);
  player1.gameboard.createShip(2, shipCoords3);
  player1.gameboard.createShip(5, shipCoords4);

  player2.gameboard.createShip(3, shipCoords1);
  player2.gameboard.createShip(4, shipCoords2);
  player2.gameboard.createShip(2, shipCoords3);

  console.log(player1.gameboard.ships);

  displayShips(player1, ".container3");

  mainLoop(player1, player2);
}

function mainLoop(player1, player2) {
  const container = document.querySelector(".container2");
  let delayInMilliseconds = 500;

  if (player1.gameboard.checkIfLost() || player2.gameboard.checkIfLost()) {
    endGame();
  } else
    container.addEventListener("click", function eventHandler(e) {
      let clickedCoords = [
        Number(e.target.dataset.x),
        Number(e.target.dataset.y),
      ];

      if (e.target.classList.contains("live")) {
        player2.gameboard.recieveAttack(clickedCoords, ".container2");
        e.target.classList.remove("live");
        container.removeEventListener("click", eventHandler);
        if (
          player1.gameboard.checkIfLost() ||
          player2.gameboard.checkIfLost()
        ) {
          endGame();
        } else
          setTimeout(function () {
            player1.sendRandomAttack(".container3");
            mainLoop(player1, player2);
          }, delayInMilliseconds);
      } else return;
    });

  function endGame() {
    console.log("GAME IS OVER");
  }
}
