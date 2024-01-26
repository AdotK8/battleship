import "./styles/styles.css";
import gameboard from "./gameboard";
import player from "./player";
import { displayBoard, displayMiss } from "./UpdatingDom";
import { displayShips } from "./UpdatingDom";
import playGame from "./game";

//creating 3 ships for players

// playGame();

const container = document.querySelector(".container3");
let player1 = new player("ahmed");

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
  0: [8, 7],
  // 1: [8, 8],
};

// player1.gameboard.createShip(5, shipCoords1);
// player1.gameboard.createShip(4, shipCoords2);
// player1.gameboard.createShip(3, shipCoords3);
player1.gameboard.createShip(1, shipCoords4);

// displayBoard(container);
// displayShips(player1, ".container3");

function moveShips() {
  const item = document.querySelector(".red");

  item.addEventListener("dragstart", dragStart);
}

moveShips();

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.remove("red");
    e.target.setAttribute("draggable", false);
  }, 0);
}

const boxes = document.querySelectorAll(".tile");

boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.target.classList.remove("drag-over");

  e.target.classList.add("red");
  e.target.setAttribute("draggable", true);
  moveShips();
}
