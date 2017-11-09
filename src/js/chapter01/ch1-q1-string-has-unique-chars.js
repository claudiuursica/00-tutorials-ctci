/**
 * 1. Implement an algorithm to determine if a string has all unique characters.
 * 2. What if you cannot use additional data structures?
 */


/**
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param {string} string - string to check
 * @returns {boolean} true if string contains only unique characters
 */
export default function hasUniqueCharacters(string) {
  if (isLongerThan256Characters(string)) {
    return false;
  }

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

/**
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 * @param {string} string - string to check
 * @returns {boolean} true if string contains only unique characters
 */
export function hasUniqueCharactersSort(string) {
  if (isLongerThan256Characters(string)) {
    return false;
  }
  
  const sortedStringAsArray = string.split('').sort();
  for (let i = 1, len = sortedStringAsArray.length; i < len; i++) {
    if (sortedStringAsArray[i - 1] === sortedStringAsArray[i]) {
      return false;
    }
  }
  
  return true;
}

/**
 * @param {string} string
 * @returns {boolean}
 */
function isLongerThan256Characters(string) {
  return string.length > 256;
}
