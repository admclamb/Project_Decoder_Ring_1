// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;
    let alpha = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let output = "";
    //  reverse the new index if encode  vs decode
    shift = encode ? shift * 1 : shift * -1;
    for (const char of input) {
      if (alpha.includes(char.toLowerCase())) {
        //      init the character to lower, current index of character in alpha,
        //      and the new index of character after shifting.
        let charLower = char.toLowerCase();
        let currIndex = alpha.indexOf(charLower);
        let newIndex = currIndex + shift;
        //      if letter is at end of alphabet go back to the front
        if (newIndex > alpha.length - 1) {
          newIndex = shift - (alpha.length - currIndex);
        } else if (newIndex < 0) {
          newIndex = alpha.length + newIndex;
        }
        let newLetter = alpha[newIndex];
        output += newLetter;
      } else {
        output += char;
      }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
