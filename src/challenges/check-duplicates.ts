/**
 * Check if there are duplicates in the array using a Set
 *
 * @param array - The array to check
 * @returns true if there are duplicates, false otherwise
 */
export function checkDuplicatesWithSet(array: number[]) {
  const uniqueNumbers = new Set(array);

  return uniqueNumbers.size !== array.length;
}

/**
 * Check if there are duplicates in the array using one for loop
 *
 * @param array - The array to check
 * @returns true if there are duplicates, false otherwise
 */
export function checkDuplicatesWithOneFor(array: number[]) {
  const seen: { [key: number]: boolean } = {};

  for (let i = 0; i < array.length; i++) {
    if (seen[array[i]]) return true;

    seen[array[i]] = true;
  }

  return false;
}

/**
 * Check if there are duplicates in the array using two for loops
 *
 * @param array - The array to check
 * @returns true if there are duplicates, false otherwise
 */
export function checkDuplicatesWithTwoFors(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return true;
    }
  }

  return false;
}
