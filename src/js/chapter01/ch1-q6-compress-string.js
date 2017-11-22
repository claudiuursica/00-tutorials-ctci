'use strict';

/**
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. If the compressed string would not become smaller
 * than the original string, your method should return the original string
 */

/**
 * The implementation assumes that the input is a string of valid characters
 *
 * @param {string} string the original string
 * @returns {string} the compressed string
 */
export default function compressString(string)
{
  if (!string || !string.length) {
    return string;
  }
  
  const len = string.length;
  
  let result = '';
  let currentChar, nextChar;
  let count = 1, i = 0;
  while (i < len)
  {
    currentChar = string.charAt(i);
    nextChar = string.charAt(i + 1);
    if (currentChar !== nextChar || i === len) {
      result += currentChar + count;
      count = 1;
    }
    else {
      count++;
    }
  
    i++;
  }
  
  return result.length < len ? result : string;
}
