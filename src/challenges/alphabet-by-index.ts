/**
 * List the letters of the alphabet by a given index
 * 
 * @param index The index of the alphabet
 * @returns The list of letters of the alphabet by index
 */
export function alphabetByIndex(index: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; 

  const result = alphabet.slice(0, index);

  return result;
}