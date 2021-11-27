const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("substitution", () => {
  it("Return false if alphabet is missing", () => {
    const input = "hello";
    const alphabet = undefined;
    const actual = substitution(input, alphabet, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
