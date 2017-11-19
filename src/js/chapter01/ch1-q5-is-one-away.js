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
export default function isOneAway(string1, string2) {
  if (!string1 || !string2 || Math.abs(string1.length - string2.length) > 1) {
    return false;
  }

  let charactersMap = new Map();
  let currentCharacter;
  for (let i = 0, len = string1.length; i < len; i++) {
    currentCharacter = string1.charAt(i);
    if (charactersMap.has(currentCharacter)) {
      charactersMap.set(currentCharacter, charactersMap.get(currentCharacter) + 1);
    } else {
      charactersMap.set(currentCharacter, 1);
    }
  }

  let j = 0, awayCount = 0;
  while (j < string2.length) {
    currentCharacter = string2.charAt(j);

    let count = charactersMap.get(currentCharacter);
    if (!count)
    {
      if (++awayCount > 2) {
        return false;
      }
    }
    else
    {
      if (count === 1) {
        charactersMap.delete(currentCharacter);
      } else {
        charactersMap.set(currentCharacter, count - 1);
      }
    }

    j++;
  }

  return charactersMap.size < 2;
}