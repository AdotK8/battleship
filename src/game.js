import player from "./player";
import gameboard from "./gameboard";
import { displayBoard } from "./UpdatingDom";

export default function playGame() {
  let player1 = new player("ahmed");

  let player2 = new player("monica");

  let shipCoords1 = {
    0: [6, 4],
    1: [6, 5],
    2: [6, 6],
    3: [6, 7],
    4: [6, 8],
  };

  let shipCoords2 = {
    0: [4, 2],
    1: [4, 3],
    2: [4, 4],
    3: [4, 5],
  };

  let shipCoords3 = {
    0: [2, 1],
    1: [2, 2],
    2: [2, 3],
  };

  let shipCoords4 = {
    0: [1, 4],
    1: [1, 5],
    2: [1, 6],
    3: [1, 7],
    4: [1, 8],
  };

  let shipCoords5 = {
    0: [2, 1],
    1: [2, 2],
    2: [2, 3],
    3: [2, 4],
  };

  let shipCoords6 = {
    0: [7, 1],
    1: [7, 2],
    2: [7, 3],
  };

  player1.gameboard.createShip(5, shipCoords1);
  player1.gameboard.createShip(4, shipCoords2);
  player1.gameboard.createShip(3, shipCoords3);

  player2.gameboard.createShip(5, shipCoords4);
  player2.gameboard.createShip(4, shipCoords5);
  player2.gameboard.createShip(3, shipCoords6);

  const container1 = document.querySelector(".container1");
  const container2 = document.querySelector(".container2");

  displayBoard(container1);
  displayBoard(container2);

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
            player1.sendRandomAttack(".container1");
            mainLoop(player1, player2);
          }, delayInMilliseconds);
      } else return;
    });

  function endGame() {
    console.log("GAME IS OVER");
  }
}
