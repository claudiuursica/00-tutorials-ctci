import { isOneAway, isOneAwayMap } from "./ch1-q5-is-one-away";

describe('Function: isOneAway', () => {
  
  it('should return true', () => {
    expect(isOneAway('pale', 'ple')).toBe(true);
    expect(isOneAway('pales', 'pale')).toBe(true);
    expect(isOneAway('pale', 'bale')).toBe(true);
  });
  
  it('should return false', () => {
    expect(isOneAway('pale', 'bake')).toBe(false);
    expect(isOneAway('pale', 'balel')).toBe(false);
  });
  
});
