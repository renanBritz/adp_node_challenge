import handleTask from "./handleTask";

it("handles a division task", () => {
  const result = handleTask("division", 3004555784555349, -243886532486135);

  expect(result).toBe(-12.319482153965016);
});

it("handles a multiplication task", () => {
  const result = handleTask(
    "multiplication",
    -8913684917380891,
    4970507095577693
  );

  expect(result).toBe(-4.4305534129585585e31);
});

it("handles a subtraction task", () => {
  const result = handleTask("subtraction", -4658021691069915, 3866950041594017);

  expect(result).toBe(-8524971732663932);
});

it("handles an addition task", () => {
  const result = handleTask("addition", -5944328980981503, 3894954937812321);

  expect(result).toBe(-2049374043169182);
});

it("handles a remainder task", () => {
  const result = handleTask("remainder", -2373720990933371, 3751821479658345);

  expect(result).toBe(-2373720990933371);
});

it("throws error when given an invalid operation", () => {
  expect(() => handleTask("operation" as any, 123, 456)).toThrow(
    "Invalid operation!"
  );
});
