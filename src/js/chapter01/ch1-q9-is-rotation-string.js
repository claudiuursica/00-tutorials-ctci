'use strict';

/**
 * Asume you have a method isSubstring which checks if one workd is a substring of another.
 * Given 2 strings s1 and s2, write code to check if s2 is a rotation of s1 using only one
 * call to is substring (e.g. "waterbottle" is a rotation of "erbottlewat")
 */

/**
 * @param {string} string
 * @param {string} words
 *
 * @return {boolean}
 */
export default function isRotationString (s1, s2) {
  if (!s1 || !s1.length || !s2 || !s2.length || s1.length !== s2.length) {
    return false;
  }
  
  return isSubstring(s1 + s1, s2);
}

/**
 * @param {string} string
 * @param {string} words
 *
 * @return {boolean}
 */
function isSubstring(string, word) {
  return string.includes(word);
}
