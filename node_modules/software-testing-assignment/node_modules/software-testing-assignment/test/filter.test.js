import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter', () => {
  it('should filter array elements based on the predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];

    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([{ user: 'barney', active: true }]);
  });

  it('should return an empty array if no elements match the predicate', () => {
    const numbers = [1, 2, 3, 4];
    const result = filter(numbers, (num) => num > 10);
    expect(result).to.deep.equal([]);
  });

  it('should return an empty array if input array is null or undefined', () => {
    expect(filter(null, () => true)).to.deep.equal([]);
    expect(filter(undefined, () => true)).to.deep.equal([]);
  });

  it('should work with an empty array', () => {
    const result = filter([], () => true);
    expect(result).to.deep.equal([]);
  });

  it('should pass index and array to the predicate', () => {
    const array = [10, 20, 30];
    const indexes = [];
    const result = filter(array, (value, index, arr) => {
      indexes.push(index);
      expect(arr).to.equal(array); // Ensure the array is passed correctly
      return value > 15;
    });

    expect(result).to.deep.equal([20, 30]);
    expect(indexes).to.deep.equal([0, 1, 2]);
  });

  it('should handle non-array input gracefully', () => {
    expect(filter(12345, () => true)).to.deep.equal([]);
    expect(filter({}, () => true)).to.deep.equal([]);
  });
});
