import player from "./player";
import { displayShips } from "./UpdatingDom";
import { generateShips } from "./generateShips";
import { displayLose, displayWin, startNewGameDom } from "./UpdatingDom";
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

  // Create ships for player1 and player2
  player1.gameboard.createShip(3, shipCoords1);
  player1.gameboard.createShip(4, shipCoords2);
  player1.gameboard.createShip(2, shipCoords3);
  player1.gameboard.createShip(5, shipCoords4);

  player2.gameboard.createShip(2, randomShips[0].coordinates);
  player2.gameboard.createShip(3, randomShips[1].coordinates);
  player2.gameboard.createShip(4, randomShips[2].coordinates);
  player2.gameboard.createShip(5, randomShips[3].coordinates);

  // Display player1's ships on the gameboard
  displayShips(player1, ".container1");
  // Start the main game loop
  mainLoop(player1, player2);
}

function mainLoop(player1, player2) {
  const container = document.querySelector(".container2");
  // Define delay times for animations and transitions
  let delayBeforeMainLoop = 1500;
  let delayBeforeAttack = 1500;
  // Add hover effect to live cells to indicate viable attacks
  addHoverEffect();

  // Check if the game is over, if not, proceed with player turns
  if (player1.gameboard.checkIfLost() || player2.gameboard.checkIfLost()) {
    endGame();
  } else
    container.addEventListener("click", function eventHandler(e) {
      let clickedCoords = [
        Number(e.target.dataset.x),
        Number(e.target.dataset.y),
      ];
      // Check if the clicked cell is a valid target
      if (e.target.classList.contains("live")) {
        addHoverEffect();
        // Process the attack on the opponent's gameboard
        player2.gameboard.recieveAttack(clickedCoords, ".container2");
        e.target.classList.remove("live");
        container.removeEventListener("click", eventHandler);
        // Check if the game is over after the attack
        if (
          player1.gameboard.checkIfLost() ||
          player2.gameboard.checkIfLost()
        ) {
          endGame();
        } else
          setTimeout(function () {
            // Proceed with the computer's random attack
            player1.sendRandomAttack(".container1");
            // Check if the game is over after te computer's attack
            if (
              player1.gameboard.checkIfLost() ||
              player2.gameboard.checkIfLost()
            ) {
              endGame();
            } else
              setTimeout(function () {
                // Continue the main game loop
                mainLoop(player1, player2);
              }, delayBeforeMainLoop);
          }, delayBeforeAttack);
      } else return;
    });

  // Function to handle end game scenarios
  function endGame() {
    const displayFunction = player1.gameboard.checkIfLost()
      ? loserLoop
      : winnerLoop;
    displayFunction();

    // Delay execution of startNewGameDom after 1 second (1000 milliseconds)
    setTimeout(playAgain, 3000);
  }

  function playAgain() {
    startNewGameDom();
  }

  // Function to toggle hover effect on live cells
  function addHoverEffect() {
    const viableAttacks = document.querySelectorAll(".container2 .live");
    viableAttacks.forEach(function (element) {
      element.classList.toggle("viable-attack");
    });
  }
}

// Function to handle the end game scenario where the player loses
function loserLoop() {
  setTimeout(() => {
    displayLose();
    playLoseSound();
  }, 1500);
}

// Function to handle the end game scenario where the player wins
function winnerLoop() {
  setTimeout(() => {
    displayWin();
    playWinSound();
  }, 1500);
}
