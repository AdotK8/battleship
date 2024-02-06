import "./styles/styles.css";

import { displayBoard } from "./UpdatingDom";
import { placeShips } from "./shipPlacement";
import gitPic from "./images/github.svg";
import { rotateShip } from "./shipPlacement";

const git = document.getElementById("git");
git.src = gitPic;

const container = document.querySelector(".container1");

displayBoard(container);
placeShips();
rotateShip();
