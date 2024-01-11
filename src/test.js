import ship from "./ship";

test("ship should be sunk", function () {
  const ship1 = new ship(4, 0);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.isSunk()).toBe(true);
});

test("ship should be sunk", function () {
  const ship1 = new ship(4, 0);

  expect(ship1.isSunk()).toBe(true);
});
