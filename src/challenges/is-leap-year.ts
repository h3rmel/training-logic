/**
 * A leap year is a year that has 366 days, instead of the usual 365 days.
 *
 * To check it with a simple formula, we can use the following:
 *
 * - If the year is divisible by 400, it is a leap year.
 * - If the year is divisible by 100, it is not a leap year.
 * - If the year is divisible by 4, it is a leap year.
 *
 * @param year The year to check
 * @returns True if the year is a leap year, false otherwise
 */
export function isLeapYear(year: number): boolean {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }
  
  return year % 4 === 0;
}
