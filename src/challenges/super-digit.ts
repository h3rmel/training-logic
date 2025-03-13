/**
 * Calculates the super digit of a number.
 * 
 * A super digit is found by summing the digits repeatedly until a single digit remains.
 * For this problem, we first concatenate the string n, k times, then find its super digit.
 * 
 * @param n - The string representation of an integer
 * @param k - The number of times to repeat n
 * @returns The super digit as an integer
 */
export function superDigit(n: string, k: number): number {
  // Base case: If n is a single digit and k is 1, return n as a number
  if (n.length === 1 && k === 1) {
    return parseInt(n);
  }
  
  // Calculate the sum of digits in n
  const sumOfDigits = n.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  
  // We don't need to physically concatenate n, k times
  // Instead, multiply the sum of digits by k (since concatenating is essentially repeating the digits)
  const totalSum = sumOfDigits * k;
  
  // Recursively calculate the super digit of the sum
  return superDigit(totalSum.toString(), 1);
}
