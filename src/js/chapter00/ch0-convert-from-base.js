'use strict'
/**
 * Write a function to check if the value of a binary number (passed as a string)
 * equals the hexadecimal representation of the string
 */

/**
 * @param {string} numberAsString
 * @param {int} base
 * @returns {number}
 */
function convertFromBase(numberAsString, base) {
  if ((base < 2) || (base > 10 && base !== 16)) {
    return -1;
  }

  var value = 0;
  for (var i = numberAsString.length - 1; i >= 0; i--) {
    var digit = digitToValue(numberAsString.charAt(i));
    if (digit < 0 || digit >= base) {
      return -1;
    }
    var exp = numberAsString.length - 1 - i;
    value += digit * Math.pow(base, exp);
  }
  return value;
}

/**
 *
 * @param char
 * @returns {number}
 */
function digitToValue(char) {
  if (char >= '0' && char <= '9') {
    return char - '0';
  } else if (char >= 'A' && char <= 'F') {
    return 10 + char.charCodeAt(0) - 'A'.charCodeAt(0);
  } else if (char >= 'a' && char <= 'f') {
    return 10 + char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  return -1;
}

/**
 * @param {string} binary
 * @param {string} hex
 * @returns {boolean}
 */
export default function compareBinToHex(binary, hex) {
  var n1 = convertFromBase(binary, 2);
  var n2 = convertFromBase(hex, 16);

  if (n1 < 0 || n2 < 0) {
    return false;
  }

  return n1 === n2;
}
