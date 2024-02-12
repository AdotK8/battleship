import hitSound from "./sounds/hit-sound.wav";
import missSound from "./sounds/miss-sound.wav";
import popSound from "./sounds/pop-sound.wav";
import loseSound from "./sounds/lose-sound.wav";
import winSound from "./sounds/win-sound.wav";

export function playHitSound() {
  const myAudio = new Audio(hitSound);
  myAudio.play();
}

export function playMissSound() {
  const myAudio = new Audio(missSound);
  myAudio.play();
}

export function playPopSound() {
  const myAudio = new Audio(popSound);
  myAudio.play();
}

export function playLoseSound() {
  const myAudio = new Audio(loseSound);
  myAudio.play();
}

export function playWinSound() {
  const myAudio = new Audio(winSound);
  myAudio.play();
}
