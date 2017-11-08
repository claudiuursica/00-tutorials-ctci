import compareBinToHex from './ch0-convert-from-base';

describe('Function: compareBinToHex', () => {
  
  it('should return true for equal values', () => {
    const binary459 = '111001011';
    const hex459 = '1CB';
    expect(compareBinToHex(binary459, hex459)).toBe(true);
  });
  
  it('should return false for non equal values', () => {
    const binary393 = '110001001';
    const hex443 = '1BB';
    expect(compareBinToHex(binary393, hex443)).toBe(false);
  });
  
});
