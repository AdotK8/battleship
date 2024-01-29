import "./styles/styles.css";
import gameboard from "./gameboard";
import player from "./player";
import { displayBoard, displayMiss } from "./UpdatingDom";
import { displayShips } from "./UpdatingDom";
import playGame from "./game";
import { placeShip } from "./shipPlacement";
import { placeShips } from "./shipPlacement";

//creating 3 ships for players

// playGame();

const container = document.querySelector(".container3");

displayBoard(container);

placeShips();
