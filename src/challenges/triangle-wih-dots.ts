export function triangleWithDots(width: number) {
  const triangle: string[] = [];

  for (let i = 1; i <= width; i++) {
    triangle.push("*".repeat(i));
  }

  return triangle.join("\n");
}
