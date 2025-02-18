/**
 * Sums two matrixes
 *
 * Sums the values of the two matrixes in the same position
 *
 * The matrixes must have the same dimensions
 *
 * @param matrix1 - The first matrix
 * @param matrix2 - The second matrix
 * @returns The sum of the two matrixes
 */
export function sumOfMatrixes(matrix1: number[][], matrix2: number[][]) {
  if (matrix1.length !== matrix2.length) {
    throw new Error("The matrixes must have the same dimensions");
  }

  return matrix1.map((row, i) => {
    return row.map((value, j) => {
      return value + matrix2[i][j];
    });
  });
}
