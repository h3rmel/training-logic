import { sumOfMatrixes } from "./sum-of-matrixes";

describe("Sum of Matrixes", () => {
  it("should sum the matrixes", () => {
    const matrix1 = [
      [1, 2],
      [3, 4],
    ];
    const matrix2 = [
      [5, 6],
      [7, 8],
    ];

    const result = sumOfMatrixes(matrix1, matrix2);

    expect(result).toEqual([
      [6, 8],
      [10, 12],
    ]);
  });

  it("should throw an error if the matrixes have different dimensions", () => {
    const matrix1 = [
      [1, 2],
      [3, 4],
    ];
    const matrix2 = [
      [5, 6],
      [7, 8],
      [9, 10],
    ];

    expect(() => sumOfMatrixes(matrix1, matrix2)).toThrow(
      "The matrixes must have the same dimensions"
    );
  });
});
