'use strict'
/**
 * Given a string, write a function to check if if is a permutation of a palindrome
 */

/**
 *
 * @param {string} string - target string
 * @returns {boolean} true if string is a palindrome
 */
export default function isPalindromePermutation(string) {
  if (!string) {
    return false;
  }
  
  const charactersSet = new Set();
  for (let i = 0; i < string.length; i++)
  {
    if (isLetter(string.charCodeAt(i))) {
      let currentChar = string.charAt(i).toLowerCase();
      if (charactersSet.has(currentChar)) {
        charactersSet.delete(currentChar);
      }
      else {
        charactersSet.add(currentChar);
      }
    }
  }
  
  return charactersSet.size <= 1;
}

/**
 * @param {number} charCode
 * @returns {boolean}
 */
function isLetter(charCode) {
  return (charCode > 64 && charCode < 91)||
         (charCode > 96 && charCode < 123)||
         (charCode > 127 && charCode < 155)||
         (charCode > 159 && charCode<166);
}
