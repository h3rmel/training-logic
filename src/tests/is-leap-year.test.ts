import { isLeapYear } from "../challenges/is-leap-year";

describe("isLeapYear", () => {
  it("Test 2024 (is leap, should return true)", () => {
    expect(isLeapYear(2024)).toBe(true);
  });

  it("Test 2025 (is not leap, should return false)", () => {
    expect(isLeapYear(2025)).toBe(false);
  });

  it("Test 1900 (is not leap, should return false)", () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  it("Test 2000 (is leap, should return true)", () => {
    expect(isLeapYear(2000)).toBe(true);
  });
});
