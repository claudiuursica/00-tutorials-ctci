import compressString from "./ch1-q6-compress-string";

describe('Function: compressString', () => {
  
  it('should return compressed string', () => {
    expect(compressString('aabcccccaaa')).toBe('a2b1c5a3');
    expect(compressString('goooood')).toBe('g1o5d1');
  });
  
  it('should return original string', () => {
    expect(compressString('m')).toBe('m');
    expect(compressString('mm')).toBe('mm');
    expect(compressString('abc')).toBe('abc');
    expect(compressString('iijjkk')).toBe('iijjkk');
    expect(compressString('ababababccab')).toBe('ababababccab');
  });
  
});
