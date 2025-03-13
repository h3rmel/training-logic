import { superDigit } from "./super-digit";

describe("superDigit", () => {
  it("should return the super digit of a number", () => {
    expect(superDigit("148", 3)).toBe(3);
    expect(superDigit("123", 3)).toBe(9);
    expect(superDigit("9875", 4)).toBe(8);
  });
});
