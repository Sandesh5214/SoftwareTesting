import { expect } from "chai";
import reduce from "../src/reduce.js";

describe("reduce", () => {
  it("should reduce an array to a single value using the iteratee", () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
    expect(result).to.equal(10);
  });

  it("should use the first element of the array as the accumulator if not provided", () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n);
    expect(result).to.equal(10);
  });

  it("should reduce an object to a single value using the iteratee", () => {
    const result = reduce({ a: 1, b: 2, c: 3 }, (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });

  it("should use the first value of the object as the accumulator if not provided", () => {
    const result = reduce({ a: 1, b: 2, c: 3 }, (sum, n) => sum + n);
    expect(result).to.equal(6);
  });

  it("should handle an empty array gracefully", () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).to.equal(0);
  });

  it("should return undefined for an empty array without an accumulator", () => {
    const result = reduce([], (sum, n) => sum + n);
    expect(result).to.equal(undefined);
  });

  it("should handle an empty object gracefully", () => {
    const result = reduce({}, (sum, n) => sum + n, 0);
    expect(result).to.equal(0);
  });

  it("should return undefined for an empty object without an accumulator", () => {
    const result = reduce({}, (sum, n) => sum + n);
    expect(result).to.equal(undefined);
  });

  it("should handle non-array, non-object input gracefully", () => {
    const result = reduce(null, (sum, n) => sum + n, 0);
    expect(result).to.equal(0);
  });

  it("should work with complex iteratees for objects", () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );
    expect(result).to.deep.equal({ 1: ["a", "c"], 2: ["b"] });
  });
});
