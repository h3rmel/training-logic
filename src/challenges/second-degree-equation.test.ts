import { secondDegreeEquation } from "./second-degree-equation";

describe("secondDegreeEquation", () => {
  it("should return one root when discriminant is zero", () => {
    expect(secondDegreeEquation(1, 2, 1)).toEqual([-1]);
  });

  it("should return two different roots when discriminant is positive", () => {
    expect(secondDegreeEquation(1, 5, 6)).toEqual([-2, -3]);
  });

  it("should return 'No real solutions' when discriminant is negative", () => {
    expect(secondDegreeEquation(1, -2, 2)).toEqual("No real solutions");
  });

  it("should throw error when 'a' coefficient is zero", () => {
    expect(() => secondDegreeEquation(0, 2, 1)).toThrow(
      "Coefficient 'a' cannot be zero - equation is not quadratic"
    );
  });
});
