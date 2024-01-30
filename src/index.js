import "./styles/styles.css";
import gameboard from "./gameboard";
import player from "./player";
import { displayBoard, displayMiss } from "./UpdatingDom";
import { displayShips } from "./UpdatingDom";
import playGame from "./game";
import { placeShip } from "./shipPlacement";
import { placeShips } from "./shipPlacement";
import gitPic from "./images/github.svg";

//creating 3 ships for players

// playGame();

const git = document.getElementById("git");
const start = document.getElementById("start");
git.src = gitPic;

const container = document.querySelector(".container3");

displayBoard(container);

start.addEventListener("click", () => {
  placeShips();
});
