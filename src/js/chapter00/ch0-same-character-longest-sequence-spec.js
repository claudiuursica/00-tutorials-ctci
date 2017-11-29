import sameCharacterLongestSequence from './ch0-same-character-longest-sequence';

describe('Function: sameCharacterLongestSequence', () => {
  
  it('should return zero for empty string or no string', () => {
    expect(sameCharacterLongestSequence(undefined)).toBe(0);
    expect(sameCharacterLongestSequence('')).toBe(0);
  });
  
  it('should return the longest sequence', () => {
    expect(sameCharacterLongestSequence('abcd')).toBe(1);
    expect(sameCharacterLongestSequence('abb')).toBe(2);
    expect(sameCharacterLongestSequence('aaBBBcc')).toBe(3);
    expect(sameCharacterLongestSequence('zzxxxccccxxz')).toBe(4);
  });
  
});
