import { expect } from 'chai';
import get from '../src/get.js'; 

describe('get function', () => {
  // Test when the path exists and the value is found
  it('should return the correct value for a valid path', () => {
    const object = { a: { b: { c: 3 } } };
    const result = get(object, 'a.b.c');
    expect(result).to.equal(3);
  });

  // Test when the path does not exist and defaultValue is returned
  it('should return defaultValue when the path does not exist', () => {
    const object = { a: { b: { c: 3 } } };
    const result = get(object, 'a.b.d', 'default');
    expect(result).to.equal('default');
  });

  // Test when the object is null or undefined
  it('should return defaultValue when the object is null', () => {
    const result = get(null, 'a.b.c', 'default');
    expect(result).to.equal('default');
  });

  it('should return defaultValue when the object is undefined', () => {
    const result = get(undefined, 'a.b.c', 'default');
    expect(result).to.equal('default');
  });

  // Test when the path is a complex path (array inside an object)
  it('should return the correct value for a complex path (array)', () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, 'a[0].b.c');
    expect(result).to.equal(3);
  });

  // Test when the path is a complex path (array inside an array)
  it('should return the correct value for a complex path (array inside array)', () => {
    const object = { a: [[{ b: 3 }]] };
    const result = get(object, 'a[0][0].b');
    expect(result).to.equal(3);
  });

  // Test when the path is an array of keys (like ['a', '0', 'b', 'c'])
  it('should return the correct value for an array path', () => {
    const object = { a: [{ b: { c: 3 } }] };
    const result = get(object, ['a', '0', 'b', 'c']);
    expect(result).to.equal(3);
  });

  // Test when defaultValue is provided and path is undefined
  it('should return defaultValue when the resolved value is undefined', () => {
    const object = { a: { b: { c: undefined } } };
    const result = get(object, 'a.b.c', 'default');
    expect(result).to.equal('default');
  });
});
