/**
 * 1. Implement an algorithm to determine if a string has all unique characters.
 * 2. What if you cannot use additional data structures?
 */

/**
 * @param {string} string - string to check
 * @returns {boolean} true if string contains only unique characters
 */
export default function hasUniqueCharacters(string) {
  const charactersSet = new Set();
  let currentChar;
  for (let i = 0, len = string.length; i < len; i++) {
    currentChar = string.charAt(i);
    if (charactersSet.has(currentChar)) {
      return false;
    }

    charactersSet.add(currentChar);
  }

  return true;
}
