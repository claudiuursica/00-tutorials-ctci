import checkPermutation from './ch1-q2-check-permutation';
import checkPermutationSort from './ch1-q2-check-permutation';

describe('Function: checkPermutation', () =>
{
  it('should return false if one of the strings is missing', () =>
  {
    expect(checkPermutation('', undefined)).toBe(false);
  });
  
  it('should return false strings have different lengths', () =>
  {
    expect(checkPermutation('ab', 'a')).toBe(false);
  });
  
  it('should return true if strings have different lengths', () =>
  {
    expect(checkPermutation('ab', 'ba')).toBe(true);
  });
  
  it('should return false if one string is not a permutaion of the other', () =>
  {
    expect(checkPermutation('abc', 'ba')).toBe(false);
  });
});

describe('Function: checkPermutationSort', () =>
{
  it('should return false if one of the strings is missing', () =>
  {
    expect(checkPermutationSort('', undefined)).toBe(false);
  });
  
  it('should return false strings have different lengths', () =>
  {
    expect(checkPermutationSort('ab', 'a')).toBe(false);
  });
  
  it('should return true if strings have different lengths', () =>
  {
    expect(checkPermutationSort('ab', 'ba')).toBe(true);
  });
  
  it('should return false if one string is not a permutaion of the other', () =>
  {
    expect(checkPermutationSort('abc', 'ba')).toBe(false);
  });
});
