import { expect } from 'chai';
import isObject from '../src/isObject.js';

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).to.be.true;
  });

  it('should return true for arrays', () => {
    expect(isObject([1, 2, 3])).to.be.true;
  });

  it('should return true for functions', () => {
    expect(isObject(function () {})).to.be.true;
    expect(isObject(() => {})).to.be.true;
  });

  it('should return false for null', () => {
    expect(isObject(null)).to.be.false;
  });

  it('should return true for objects created with a constructor', () => {
    expect(isObject(new Number(0))).to.be.true;
    expect(isObject(new String(''))).to.be.true;
    expect(isObject(new Date())).to.be.true;
  });

  it('should return false for primitive values', () => {
    expect(isObject(42)).to.be.false;
    expect(isObject('string')).to.be.false;
    expect(isObject(true)).to.be.false;
    expect(isObject(undefined)).to.be.false;
  });

  it('should return false for symbols', () => {
    expect(isObject(Symbol('test'))).to.be.false;
  });

  it('should return true for RegExp objects', () => {
    expect(isObject(/regex/)).to.be.true;
    expect(isObject(new RegExp('regex'))).to.be.true;
  });
});
