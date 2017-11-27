'use strict';

/**
 * Write a program to rotate a NxN matrix by 90 degress. Can you do this in place?
 */

/**
 * @param {Array.<number, number>} matrix
 * @returns @param {Array.<number, number>} matrix
 */
export default function rotateMatrix (matrix) {
  if (!matrix || !matrix.length || !matrix[0] || matrix.length !== matrix[0].length) {
    throw new Error('Invalid matrix.');
  }

  const n = matrix.length;
  const half = Math.floor(n / 2);
  for (let layer = 0; layer < half; layer++) {
    let first = layer;
    let last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;

      //save top to temp
      let top = matrix[first][i];

      //left to top
      matrix[first][i] = matrix[last - offset][first];

      //bottom to left
      matrix[last - offset][first] = matrix[last][last - offset];

      //right to bottom
      matrix[last][last - offset] = matrix[i][last];

      //top to right
      matrix[i][last] = top
    }
  }

  return matrix;
}
