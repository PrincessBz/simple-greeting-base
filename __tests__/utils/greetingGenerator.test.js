const { getRandomGreeting } = require("../../utils/greetingGenerator");

describe("Tests for getRandomGreeting", () => {
  test("Verify a valid greetin is returned", () => {
    expect(getRandomGreeting()).toBeTruthy;
  });
});
