import "./styles/styles.css";
import { ships } from "./ship";
import gameboard from "./gameboard";

let gameboard1 = new gameboard();
gameboard1.createShip(4, 5, 9);
gameboard1.createShip(3, 2, 8);

gameboard1.recieveAttack();
