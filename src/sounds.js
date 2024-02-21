import hitSound from "./sounds/hit-sound.wav";
import missSound from "./sounds/miss-sound.wav";
import popSound from "./sounds/pop-sound.wav";
import loseSound from "./sounds/lose-sound.wav";
import winSound from "./sounds/win-sound.wav";

function playSound(sound) {
  const myAudio = new Audio(sound);
  myAudio.play();
}

export function playHitSound() {
  playSound(hitSound);
}

export function playMissSound() {
  playSound(missSound);
}

export function playPopSound() {
  playSound(popSound);
}

export function playLoseSound() {
  playSound(loseSound);
}

export function playWinSound() {
  playSound(winSound);
}
