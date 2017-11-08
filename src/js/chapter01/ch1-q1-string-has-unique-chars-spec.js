import hasUniqueCharacters from './ch1-q1-string-has-unique-chars';
import hasUniqueCharactersSort from './ch1-q1-string-has-unique-chars';

describe('Function: hasUniqueCharacters', () => {
  
  it('should return true for unique characters string', () => {
    expect(hasUniqueCharacters('abcd')).toBe(true);
  });
  
  it('should return false for non unique characters string', () => {
    expect(hasUniqueCharacters('absda')).toBe(false);
  });
  
});

describe('Function: hasUniqueCharactersSort', () => {
  
  it('should return true for unique characters string', () => {
    expect(hasUniqueCharactersSort('abcd')).toBe(true);
  });
  
  it('should return false for non unique characters string', () => {
    expect(hasUniqueCharactersSort('absda')).toBe(false);
  });
  
});
