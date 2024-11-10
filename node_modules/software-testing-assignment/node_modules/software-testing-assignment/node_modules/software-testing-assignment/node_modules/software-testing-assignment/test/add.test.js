import { expect } from 'chai';
import add from '../src/add.js';

describe('add function', () => {
  it('should add two positive numbers correctly', () => {
    const result = add(6, 4);
    expect(result).to.equal(10);
  });

  it('should add a positive and a negative number correctly', () => {
    const result = add(6, -4);
    expect(result).to.equal(2);
  });

  it('should add two negative numbers correctly', () => {
    const result = add(-6, -4);
    expect(result).to.equal(-10);
  });

  it('should return the other number when adding zero', () => {
    const result = add(6, 0);
    expect(result).to.equal(6);
  });

  it('should return the other number when adding zero in reverse order', () => {
    const result = add(0, 4);
    expect(result).to.equal(4);
  });

  it('should handle adding two zeros correctly', () => {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });
});
