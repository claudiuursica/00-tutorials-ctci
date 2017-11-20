'use strict';
/**
 * There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check
 * if they are one edit (or zero edits away).
 */

/**
 * @param {string} string1
 * @param {string} string2
 * @returns {boolean}
 */
export function isOneAway(string1, string2) {
  if (!string1 || !string2 || Math.abs(string1.length - string2.length) > 1) {
    return false;
  }
  
  const areLengthsEqual = string1.length === string2.length;
  const isFirstStringShorter = string1.length < string2.length;
  const str1 = isFirstStringShorter ? string1 : string2;
  const str2 = isFirstStringShorter ? string2 : string1;
  const len1 = str1.length;
  const len2 = str2.length;
  
  let i = 0;
  let j = 0;
  let alreadyFoundDifference = false;
  while (i < len1 && j < len2) {
    if (str1.charAt(i) !== str2.charAt(j)) {
      if (alreadyFoundDifference) {
        return false;
      }
      
      alreadyFoundDifference = true;
      
      if (areLengthsEqual) {
        i++;
      }
    }
    else {
      i++;
    }
    
    j++
  }
  
  return true;
}
