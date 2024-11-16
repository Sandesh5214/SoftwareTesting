import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js'; 


describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(undefined)).to.be.true;
  });

  it('should return true for empty array-like values', () => {
    expect(isEmpty([])).to.be.true;
    expect(isEmpty('')).to.be.true;
    expect(isEmpty(Buffer.from([]))).to.be.true;
    expect(isEmpty(new Uint8Array([]))).to.be.true;
    expect(isEmpty((function () { return arguments; })())).to.be.true;
  });

  it('should return false for non-empty array-like values', () => {
    expect(isEmpty([1, 2, 3])).to.be.false;
    expect(isEmpty('abc')).to.be.false;
    expect(isEmpty(Buffer.from([1]))).to.be.false;
    expect(isEmpty(new Uint8Array([1, 2]))).to.be.false;
  });

  it('should return true for empty objects, maps, and sets', () => {
    expect(isEmpty({})).to.be.true;
    expect(isEmpty(new Map())).to.be.true;
    expect(isEmpty(new Set())).to.be.true;
  });

  it('should return false for non-empty objects, maps, and sets', () => {
    expect(isEmpty({ a: 1 })).to.be.false;
    expect(isEmpty(new Map([[1, 'a']]))).to.be.false;
    expect(isEmpty(new Set([1, 2]))).to.be.false;
  });

  it('should return true for prototype objects without properties', () => {
    function Proto() {}
    Proto.prototype.prop = 'value';
    const obj = Object.create(Proto.prototype);
    expect(isEmpty(obj)).to.be.true;
  });

  it('should return false for objects with own properties', () => {
    expect(isEmpty({ key: 'value' })).to.be.false;
  });
});
