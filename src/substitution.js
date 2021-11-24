const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function isDuplicate(arr) {
    return new Set(arr).size !== arr.length;
  }

  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined) {
      return false;
    }
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
    let keyAlpha = alphabet.split("");
    if (alphabet.length > 26 || alphabet.length < 26) {
      return false;
    }
    if (isDuplicate(keyAlpha)) {
      return false;
    }
    let outArr = input.split("");
    let output = "";
    if (encode) {
      for (const lett of outArr) {
        if (alpha.includes(lett)) {
          let index = alpha.indexOf(lett);
          output += keyAlpha[index];
        } else {
          output += lett;
        }
      }
    } else {
      for (const char of outArr) {
        if (keyAlpha.includes(char)) {
          let index = keyAlpha.indexOf(char);
          output += alpha[index];
        } else {
          output += char;
        }
      }
    }
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
