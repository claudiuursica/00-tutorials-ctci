'use strict'
/**
 * Given two strings, write a method to decide if one is a permutation of the other
 */

/**
 * @param {string} string1
 * @param {string} string2
 */
export default function checkPermutation(string1, string2)
{
  if (!string1 || !string2 || string1.length !== string2.length) {
    return false;
  }
  
  const charactersMap = new Map();
  
  let currentChar;
  for (let i = 0, len = string1.length; i < len; i++)
  {
    currentChar = string1.charAt(i);
    charactersMap.set(currentChar, charactersMap.get(currentChar) + 1 || 1);
  }
  
  for (let j = 0, len = string2.length; j < len; j++)
  {
    currentChar = string2.charAt(j);
    let count = charactersMap.get(currentChar);
    if (!count) {
      return false;
    }
    
    if (count === 1) {
      charactersMap.delete(currentChar)
    } else {
      charactersMap.set(currentChar, count - 1);
    }
  }
  
  return charactersMap.size === 0;
}
