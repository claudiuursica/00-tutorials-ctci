import rotateMatrix from "./ch1-q7-rotate-matrix";

describe('Function: rotateMatrix', () => {
  
  it('should return the rotated matrix', () => {
    const test_2X2_matrix = [
      [1, 2],
      [3, 4]
    ];
  
    const rotated_2X2_matrix = [
      [3, 1],
      [4, 2]
    ];

    expect(rotateMatrix(test_2X2_matrix)).toEqual(rotated_2X2_matrix);

    const test_3X3_matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  
    const rotated_3X3_matrix = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ];
  
    expect(rotateMatrix(test_3X3_matrix)).toEqual(rotated_3X3_matrix);
  });
});
