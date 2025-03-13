import { alphabetByIndex } from "./alphabet-by-index";

describe("Alphabet by Index", () => {
  it("should return the first letter of the alphabet", () => {
    expect(alphabetByIndex(1)).toBe("a");
  });

  it("should return the first two letters of the alphabet", () => {
    expect(alphabetByIndex(2)).toBe("ab");
  });

  it("should return the alphabet", () => {
    expect(alphabetByIndex(26)).toBe("abcdefghijklmnopqrstuvwxyz");
  });
});