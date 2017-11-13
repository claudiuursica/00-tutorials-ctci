'use strict'
/**
 * 1. Implement an algorithm to determine if a string has all unique characters.
 * 2. What if you cannot use additional data structures?
 */


/**
 * @param {string} string - string to check
 * @returns {boolean} true if string contains only unique characters
 */
export function hasUniqueCharacters(string) {
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
 *
 * @param {string} string - string to check
 * @returns {boolean} true if string contains only unique characters
 */
export function hasUniqueCharactersSort(string) {
  console.log("hasUniqueCharactersSort");
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
