import { expect } from "chai";
import map from "../src/map.js";

describe("map", () => {
  it("should apply the iteratee to each element of the array", () => {
    const array = [1, 2, 3];
    const iteratee = (n) => n * 2;
    const result = map(array, iteratee);
    expect(result).to.deep.equal([2, 4, 6]);
  });

  it("should pass value, index, and array to the iteratee", () => {
    const array = ["a", "b", "c"];
    const iteratee = (value, index, arr) => `${value}-${index}-${arr.length}`;
    const result = map(array, iteratee);
    expect(result).to.deep.equal([
      "a-0-3",
      "b-1-3",
      "c-2-3",
    ]);
  });

  it("should return an empty array if the input array is empty", () => {
    const array = [];
    const iteratee = (n) => n * 2;
    const result = map(array, iteratee);
    expect(result).to.deep.equal([]);
  });

  it("should return an empty array if the input array is null or undefined", () => {
    const iteratee = (n) => n * 2;
    expect(map(null, iteratee)).to.deep.equal([]);
    expect(map(undefined, iteratee)).to.deep.equal([]);
  });

  it("should work with objects in the array", () => {
    const array = [{ value: 1 }, { value: 2 }, { value: 3 }];
    const iteratee = (obj) => obj.value * 2;
    const result = map(array, iteratee);
    expect(result).to.deep.equal([2, 4, 6]);
  });

  it("should throw an error if iteratee is not a function", () => {
    const array = [1, 2, 3];
    expect(() => map(array, undefined)).to.throw(TypeError, "iteratee is not a function");
  });
  

  it("should not modify the original array", () => {
    const array = [1, 2, 3];
    const iteratee = (n) => n * 2;
    map(array, iteratee);
    expect(array).to.deep.equal([1, 2, 3]);
  });
});
