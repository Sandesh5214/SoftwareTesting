import { expect } from 'chai';
import keys from '../src/keys.js';

describe('keys', () => {
  it('should return an array of own enumerable property names for an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(keys(obj)).to.have.members(['a', 'b', 'c']);
  });

  it('should not include prototype properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;
    expect(keys(new Foo())).to.have.members(['a', 'b']);
  });

  it('should handle array-like objects', () => {
    const arr = [1, 2, 3];
    expect(keys(arr)).to.have.members(['0', '1', '2']);
  });

  it('should handle strings as array-like objects', () => {
    expect(keys('hi')).to.have.members(['0', '1']);
  });

  it('should return an empty array for empty objects', () => {
    expect(keys({})).to.deep.equal([]);
  });

  it('should handle non-object values by coercing them to objects', () => {
    expect(keys(42)).to.deep.equal([]);
    expect(keys(null)).to.deep.equal([]);
    expect(keys(undefined)).to.deep.equal([]);
  });

  it('should handle objects with symbol properties (not included)', () => {
    const sym = Symbol('test');
    const obj = { a: 1, [sym]: 2 };
    expect(keys(obj)).to.have.members(['a']);
  });
});
