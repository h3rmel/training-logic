import {
  checkDuplicatesWithOneFor,
  checkDuplicatesWithSet,
  checkDuplicatesWithTwoFors,
} from "../challenges/check-duplicates";

describe("checkDuplicates", () => {
  it("checkDuplicatesWithSet - duplicates in the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
    expect(checkDuplicatesWithSet(array)).toBe(true);
  });

  it("checkDuplicatesWithSet - no duplicates in the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(checkDuplicatesWithSet(array)).toBe(false);
  });

  it("checkDuplicatesWithOneFor - duplicates in the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
    expect(checkDuplicatesWithOneFor(array)).toBe(true);
  });

  it("checkDuplicatesWithOneFor - no duplicates in the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(checkDuplicatesWithOneFor(array)).toBe(false);
  });

  it("checkDuplicatesWithTwoFors - duplicates in the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
    expect(checkDuplicatesWithTwoFors(array)).toBe(true);
  });

  it("checkDuplicatesWithTwoFors - no duplicates in the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(checkDuplicatesWithTwoFors(array)).toBe(false);
  });
});
