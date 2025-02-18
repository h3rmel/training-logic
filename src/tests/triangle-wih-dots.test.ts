import { triangleWithDots } from "../challenges/triangle-wih-dots";

describe("Triangle with Dots", () => {
  it("should return a triangle with 3 dots of length", () => {
    console.log(triangleWithDots(3));

    expect(triangleWithDots(3)).toBe("*\n**\n***");
  });

  it("should return a triangle with 4 dots of length", () => {
    console.log(triangleWithDots(4));

    expect(triangleWithDots(4)).toBe("*\n**\n***\n****");
  });

  it("should return a triangle with 5 dots of length", () => {
    console.log(triangleWithDots(5));

    expect(triangleWithDots(5)).toBe("*\n**\n***\n****\n*****");
  });
});
