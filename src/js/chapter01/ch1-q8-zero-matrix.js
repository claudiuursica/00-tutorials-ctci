'use strict';

/**
 * Write an algorithm such that if an element in an MxN matrix is zero,
 * its entire row and column are set to zero
 */

/**
 * @param {Array.<number, number>} matrix
 * @returns {Array.<number, number>}
 */
export default function zeroMatrix (matrix) {
  if (!matrix || !matrix.length || !matrix[0] || !matrix[0].length) {
    throw new Error('Invalid matrix.');
  }

  const rowLength = matrix.length;
  const columnLength = matrix[0].length;
  
  const row = new Array(rowLength);
  const column = new Array(columnLength);
  
  for (let i = 0; i < rowLength; i++)
  {
    for (let j = 0; j < columnLength; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }
  
  for (let k = 0; k < rowLength; k++)
  {
    if (row[k]) {
      zeroRow(matrix, k);
    }
  }
  
  for (let m = 0; m < columnLength; m++)
  {
    if (column[m]) {
      zeroColumn(matrix, m);
    }
  }
  
  return matrix;
}

/**
 * @param {Array.<number, number>} matrix
 * @param {number} index
 */
function zeroRow(matrix, index) {
  for (let j = 0; j < matrix[0].length; j++)
  {
    matrix[index][j] = 0;
  }
}

/**
 * @param {Array.<number, number>} matrix
 * @param {number} index
 */
function zeroColumn(matrix, index) {
  for (var i = 0; i < matrix.length; i++)
  {
    matrix[i][index] = 0;
  }
}
