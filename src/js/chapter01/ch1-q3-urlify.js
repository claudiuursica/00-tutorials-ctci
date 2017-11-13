'use strict'
/**
 * Write a method to replace all spaces in a string with %20
 *
 * Note: In real life, one is better of using encodeURIComponent(), or String.replace()
 */

/**
 *
 * @param {string} string - target string
 * @returns {string} string with spaces replaced by %2
 */
export default function urlIfy(string) {
  let output = '';
  if (!string || string.length === 0) {
    return output;
  }
  
  let trimmedString = string.trim();
  let len = trimmedString.length;
  
  let i = 0;
  while (i < len) {
    let currentChar = trimmedString.charAt(i);
    output += (currentChar === ' ') ? '%20' : currentChar;
    i++;
  }
  
  return output;
}
