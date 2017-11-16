import isPalindromePermutation from "./ch1-q4-is-palindrome";

describe('Function: isPalindromePermutation', () => {
  
  it('should return true', () => {
    expect(isPalindromePermutation('racecar')).toBe(true);
    expect(isPalindromePermutation('Tact Coa')).toBe(true);
    expect(isPalindromePermutation('race car')).toBe(true);
    expect(isPalindromePermutation('A man, a plan, a canal. Panama')).toBe(true);
    expect(isPalindromePermutation('never odd or even')).toBe(true);
    expect(isPalindromePermutation('My age is 0, 0 si ega ym')).toBe(true);
  });
  
  it('should return false', () => {
    expect(isPalindromePermutation('not a palindrome')).toBe(false);
    expect(isPalindromePermutation('nope')).toBe(false);
    expect(isPalindromePermutation('almostomla')).toBe(false);
  });
  
});
