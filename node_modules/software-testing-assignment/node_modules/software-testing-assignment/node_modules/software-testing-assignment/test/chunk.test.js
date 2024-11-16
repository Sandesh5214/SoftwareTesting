import { expect } from 'chai';
import chunk from '../src/chunk.js';

describe('chunk', () => {
  it('should split an array into chunks of specified size', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 2);
    expect(result).to.deep.equal([['a', 'b'], ['c', 'd']]);
  });

  it('should handle arrays that cannot be evenly divided', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 3);
    expect(result).to.deep.equal([['a', 'b', 'c'], ['d']]);
  });

  it('should return an empty array when input array is null or undefined', () => {
    expect(chunk(null)).to.deep.equal([]);
    expect(chunk(undefined)).to.deep.equal([]);
  });

  it('should return an empty array if size is less than 1', () => {
    expect(chunk(['a', 'b', 'c'], 0)).to.deep.equal([]);
    expect(chunk(['a', 'b', 'c'], -1)).to.deep.equal([]);
  });

  it('should return the original array wrapped in an array if size is greater than array length', () => {
    const result = chunk(['a', 'b'], 5);
    expect(result).to.deep.equal([['a', 'b']]);
  });

  it('should handle size defaulting to 1', () => {
    const result = chunk(['a', 'b', 'c']);
    expect(result).to.deep.equal([['a'], ['b'], ['c']]);
  });

  it('should handle non-array input gracefully', () => {
    expect(chunk('string')).to.deep.equal([['s'], ['t'], ['r'], ['i'], ['n'], ['g']]);
    expect(chunk(123)).to.deep.equal([[1], [2], [3]]);
  });

  it('should handle empty array input', () => {
    expect(chunk([])).to.deep.equal([]);
  });
});
