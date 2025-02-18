/**
 * Create a triangle with dots
 * 
 * @param width The width of the triangle
 * @returns The triangle composed of dots
 */
export function triangleWithDots(width: number) {
  const triangle: string[] = [];

  for (let i = 1; i <= width; i++) {
    triangle.push("*".repeat(i));
  }

  return triangle.join("\n");
}
