import isRotationString from "./ch1-q9-is-rotation-string";

describe('Function: isRotationString', () => {
  
  it('should return false if one or both strings are empty', () => {
    expect(isRotationString('', '')).toBe(false);
    expect(isRotationString('a', '')).toBe(false);
  });
  
  it('should return false if strings have different length', () => {
    expect(isRotationString('', '')).toBe(false);
  });
  
  it('should return true if s2 is substring a rotation of s1', () => {
    expect(isRotationString('waterbottle', 'erbottlewat')).toBe(true);
  });
  
});
