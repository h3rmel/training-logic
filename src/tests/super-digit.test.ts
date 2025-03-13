import { superDigit } from "../challenges/super-digit";

describe("superDigit", () => {
  it("should return the super digit of a number", () => {
    expect(superDigit(123)).toBe(6);
    expect(superDigit(123456789)).toBe(45);
    expect(superDigit(363)).toBe(12);
    expect(superDigit(148)).toBe(13);
  });
});
