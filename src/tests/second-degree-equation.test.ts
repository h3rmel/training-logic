import { secondDegreeEquation } from "../challenges/second-degree-equation";

describe("secondDegreeEquation", () => {
  it("should return two equal roots when discriminant is zero", () => {
    expect(secondDegreeEquation(1, 2, 1)).toEqual([-1, -1]);
  });

  it("should return two different roots when discriminant is positive", () => {
    expect(secondDegreeEquation(1, 5, 6)).toEqual([-2, -3]);
  });

  it("should return empty array when discriminant is negative", () => {
    expect(secondDegreeEquation(1, -2, 2)).toEqual("No solution");
  });
});
