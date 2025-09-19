import { buildApp } from "./main";

describe("buildApp()", () => {
  it("does not throw", () => {
    expect(() => buildApp()).not.toThrow();
  });
});
