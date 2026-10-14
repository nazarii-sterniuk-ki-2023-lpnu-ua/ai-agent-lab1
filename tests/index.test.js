const helloWorld = require("../src");

describe("helloWorld", () => {
  test("returns the Hello World greeting", () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
});
