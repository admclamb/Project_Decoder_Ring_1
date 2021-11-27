const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
  it("should return the encode wit ALL characters when encoding", () => {
    const input = "test ' ___ !*$#";
    const actual = polybius(input, true);
    const expected = "44513444 ' ___ !*$#";
    expect(actual).to.equal(expected);
  });

  it("should return the encode wit ALL characters when decoding", () => {
    const input = "44513444 ' ___ !*$#";
    const actual = polybius(input, false);
    const expected = "test ' ___ !*$#";
    expect(actual).to.equal(expected);
  });
});
