import player from "./player";
import { displayShips } from "./UpdatingDom";
import { generateShips } from "./generateShips";
import { displayLose, displayWin } from "./UpdatingDom";
import { playLoseSound, playWinSound } from "./sounds";

export default function playGame(
  shipCoords1,
  shipCoords2,
  shipCoords3,
  shipCoords4
) {
  let player1 = new player("player");
  let player2 = new player("computer");

  const randomShips = generateShips();

  player1.gameboard.createShip(3, shipCoords1);
  player1.gameboard.createShip(4, shipCoords2);
  player1.gameboard.createShip(2, shipCoords3);
  player1.gameboard.createShip(5, shipCoords4);

  player2.gameboard.createShip(2, randomShips[0].coordinates);
  player2.gameboard.createShip(3, randomShips[1].coordinates);
  player2.gameboard.createShip(4, randomShips[2].coordinates);
  player2.gameboard.createShip(5, randomShips[3].coordinates);

  displayShips(player1, ".container1");

  mainLoop(player1, player2);
}

function mainLoop(player1, player2) {
  const container = document.querySelector(".container2");

  let delayBeforeMainLoop = 1500;
  let delayBeforeAttack = 1500;
  addHoverEffect();
  if (player1.gameboard.checkIfLost() || player2.gameboard.checkIfLost()) {
    endGame();
  } else
    container.addEventListener("click", function eventHandler(e) {
      let clickedCoords = [
        Number(e.target.dataset.x),
        Number(e.target.dataset.y),
      ];

      if (e.target.classList.contains("live")) {
        addHoverEffect();
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
            player1.sendRandomAttack(".container1");
            setTimeout(function () {
              mainLoop(player1, player2);
            }, delayBeforeMainLoop);
          }, delayBeforeAttack);
      } else return;
    });

  function endGame() {
    const displayFunction = player1.gameboard.checkIfLost()
      ? loserLoop
      : winnerLoop;
    displayFunction();
  }

  function addHoverEffect() {
    const viableAttacks = document.querySelectorAll(".container2 .live");
    viableAttacks.forEach(function (element) {
      element.classList.toggle("viable-attack");
    });
  }
}

function loserLoop() {
  setTimeout(() => {
    displayLose();
    playLoseSound();
  }, 1500);
}

function winnerLoop() {
  setTimeout(() => {
    displayWin();
    playWinSound();
  }, 1500);
}
