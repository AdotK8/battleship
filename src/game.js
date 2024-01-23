import player from "./player";
import gameboard from "./gameboard";

export default function playGame(player1, player2) {
  userSelectAttack(player1, player2);
  // player1.sendRandomAttack(".container1");
}

function userSelectAttack(player1, player2) {
  const container = document.querySelector(".container2");

  container.addEventListener("click", function eventHandler(e) {
    let clickedCoords = [
      Number(e.target.dataset.x),
      Number(e.target.dataset.y),
    ];
    if (e.target.classList.contains("live")) {
      player2.gameboard.recieveAttack(clickedCoords, ".container2");
      e.target.classList.remove("live");
      container.removeEventListener("click", eventHandler);
    } else if (!e.target.classList.contains("live")) {
      console.log("test");
    }
  });
}
