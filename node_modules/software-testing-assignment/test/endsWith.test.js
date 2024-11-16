import { expect } from 'chai';
import endsWith from '../src/endsWith.js';

describe('endsWith', () => {
  it('should return true if string ends with the target', () => {
    expect(endsWith('abc', 'c')).to.be.true;
  });

  it('should return false if string does not end with the target', () => {
    expect(endsWith('abc', 'b')).to.be.false;
  });

  it('should return true if string ends with the target up to the specified position', () => {
    expect(endsWith('abc', 'b', 2)).to.be.true;
  });

  it('should return false if position is less than the length of the target', () => {
    expect(endsWith('abc', 'c', 2)).to.be.false;
  });

  it('should handle position greater than string length', () => {
    expect(endsWith('abc', 'c', 10)).to.be.true;
  });

  it('should handle negative or NaN positions as 0', () => {
    expect(endsWith('abc', 'a', -1)).to.be.false;
    expect(endsWith('abc', 'a', NaN)).to.be.false;
  });

  it('should handle empty strings and targets', () => {
    expect(endsWith('', '')).to.be.true;
    expect(endsWith('abc', '')).to.be.true;
    expect(endsWith('', 'a')).to.be.false;
  });

  it('should return false if target length is greater than string length', () => {
    expect(endsWith('abc', 'abcd')).to.be.false;
  });
});
