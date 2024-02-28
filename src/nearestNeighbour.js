export function addLatestHitClass(attackArray) {
  let latestHitTile = document.querySelector(
    `.container1 [data-x="${attackArray[0]}"][data-y="${attackArray[1]}"]`
  );
  latestHitTile.classList.add("latest-hit");
}

export function removeLatestHitClass() {
  let latestHitElement = document.querySelector(".latest-hit");

  if (latestHitElement !== null) {
    latestHitElement.classList.remove("latest-hit");
  }
}

export default function toggleLatestHitClass(attackArray) {
  let latestHitElement = document.querySelector(".latest-hit");

  if (latestHitElement !== null) {
    removeLatestHitClass();
    addLatestHitClass(attackArray);
  } else {
    addLatestHitClass(attackArray);
  }
}

export function checkNearestNeighbour() {
  let latestHitElement = document.querySelector(".latest-hit");
  let latestHitArray = [
    Number(latestHitElement.dataset.x),
    Number(latestHitElement.dataset.y),
  ];
  console.log(latestHitArray);
}
