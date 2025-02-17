import { alphabetByIndex } from "../challenges/alphabet-by-index";

describe("Alphabet by Index", () => {
  it("should return the A letter", () => {
    expect(alphabetByIndex(1)).toBe("a");
  });

  it("should return the B letter", () => {
    expect(alphabetByIndex(2)).toBe("b");
  });

  it("should return the Z letter", () => {
    expect(alphabetByIndex(26)).toBe("z");
  });
});