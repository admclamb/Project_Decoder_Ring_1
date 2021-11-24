// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe("caesar", () => {
  it("should return the correct encoded string without edge cases", () => {
    const input = "mn op";
    const actual = caesar(input, 5);
    const expected = "rs tu";
    expect(actual).to.equal(expected);
  });
});
