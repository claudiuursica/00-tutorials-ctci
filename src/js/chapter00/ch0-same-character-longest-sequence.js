'use strict';

/**
 * Find the same character longest sequence in a string
 */

/**
 * @param {string} string
 * @return {number}
 */
export default function sameCharacterLongestSequence(string)
{
  if (!string || !string.length) {
    return 0;
  }
  
  var longestSequence = 1;
  for (let i = 0; i < string.length - 1; i++) {
    let count = 1;
    while (string.charAt(i) === string.charAt(i + 1) && i < string.length) {
      i++;
      count++;
    }
    
    longestSequence = count > longestSequence ? count : longestSequence;
  }

  return longestSequence;
}
