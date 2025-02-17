/**
 * Solves a second degree equation
 *
 * If the discriminant is negative, there is no solution.
 *
 * @param a The coefficient of x²
 * @param b The coefficient of x
 * @param c The constant term
 * @returns The solutions of the equation
 */
export function secondDegreeEquation(a: number, b: number, c: number) {
  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return "No solution";
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  return [x1, x2];
}
