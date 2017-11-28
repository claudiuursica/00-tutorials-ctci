import zeroMatrix from "./ch1-q8-zero-matrix";

describe('Function: zeroMatrix', () => {
  
  it('should return the zeroed matrix', () => {
  
      const matrix_2x3 =  [
        [1, 0, 2],
        [3, 4, 5]
      ];
      
      const zeroed_2x3 = [
        [0, 0, 0],
        [3, 0, 5]
      ];
    
    expect(zeroMatrix(matrix_2x3)).toEqual(zeroed_2x3);
  
    const matrix_4x3 =  [
      [1, 0, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 9, 3]
    ];
  
    const zeroed_4x3 = [
      [0, 0, 0],
      [0, 0, 5],
      [0, 0, 8],
      [0, 0, 0]
    ];
  
    expect(zeroMatrix(matrix_4x3)).toEqual(zeroed_4x3);
  });
});
