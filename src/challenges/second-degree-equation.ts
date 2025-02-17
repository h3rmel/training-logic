/**
 * Solves a second degree equation
 * 
 * If the discriminant (delta) is negative, there are no real solutions.
 * If the discriminant is zero, there is one real solution.
 * If the discriminant is positive, there are two real solutions.
 *
 * @param a The coefficient of x²
 * @param b The coefficient of x
 * @param c The constant term
 * @returns The solutions of the equation or a message indicating no solution
 */
export function secondDegreeEquation(a: number, b: number, c: number) {
  if (a === 0) {
    throw new Error("Coefficient 'a' cannot be zero - equation is not quadratic");
  }

  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return "No real solutions";
  }

  if (delta === 0) {
    const x = -b / (2 * a);
    return [x];
  }

  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  return [x1, x2];
}
