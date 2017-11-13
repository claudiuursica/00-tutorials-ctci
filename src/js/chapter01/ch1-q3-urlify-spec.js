import urlIfy from './ch1-q3-urlify';

describe('Function: urlIfy', () => {
  
  it('should return empty string for invalid input', () => {
    expect(urlIfy(undefined)).toBe('');
  });
  
  it('should return the empty string if the input is an empyt string', () => {
    expect(urlIfy('')).toBe('');
  });
  
  it('should replace spaces with %20 in the string', () => {
    expect(urlIfy('Test - Text')).toBe('Test%20-%20Text');
  });
  
  it('should trim before replacing ', () => {
    expect(urlIfy(' Test - Text ')).toBe('Test%20-%20Text');
  });
});
