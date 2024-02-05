import "./styles/styles.css";
import gameboard from "./gameboard";
import player from "./player";
import { displayBoard, displayMiss } from "./UpdatingDom";
import { displayShips } from "./UpdatingDom";
import playGame from "./game";
import { placeShip } from "./shipPlacement";
import { placeShips } from "./shipPlacement";
import gitPic from "./images/github.svg";
import { rotateShip } from "./shipPlacement";

const git = document.getElementById("git");
const start = document.getElementById("start");
const topText = document.querySelector(".invisible");
git.src = gitPic;

const container = document.querySelector(".container3");

displayBoard(container);
placeShips();
rotateShip();

// start.addEventListener("click", () => {
//   placeShips();
//   topText.classList.remove("invisible");
// });
