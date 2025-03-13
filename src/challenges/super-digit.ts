export function superDigit(value: number): number {
  const digits: number[] = value.toString().split("").map(Number);

  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  return sum;
}
