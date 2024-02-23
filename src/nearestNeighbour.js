export default function addLatestHitClass(temp) {
  let latestHitTile = document.querySelector(
    `.container1 [data-x="${temp[0]}"][data-y="${temp[1]}"]`
  );

  if (
    latestHitTile !== null &&
    latestHitTile.classList.contains("placedShip")
  ) {
    latestHitTile.classList.add("latest-hit");
  }
}

export function removeLatestHitClass(temp) {
  let latestHitElement = document.querySelector(".latest-hit");

  if (latestHitElement !== null) {
    latestHitElement.classList.remove("latest-hit");
  }
}
