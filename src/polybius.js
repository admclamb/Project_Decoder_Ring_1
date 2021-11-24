const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  function polybius(input, encode = true) {
    let polybiusSquare = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      "(i/j)": 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };
    let output = "";
    //  Should encode
    if (encode) {
      for (const letter of input) {
        let lettLower = letter.toLowerCase();
        console.log(letter);
        if (
          lettLower in polybiusSquare ||
          lettLower === "i" ||
          lettLower === "j"
        ) {
          if (lettLower === "i" || lettLower === "j") {
            console.log("in here");
            output += 42;
          } else {
            output += polybiusSquare[lettLower];
          }
        } else {
          output += letter;
        }
      }
      console.log(output);
    }
    //  Should decode
    if (!encode) {
      let temp = "";
      let reg = /[0-9]/g;
      for (let i = 0; i < input.length; i++) {
        let num = input[i];
        if (num !== " ") {
          temp += num;
          if (temp.length === 2) {
            let letter = getKeyByValue(polybiusSquare, Number(temp));
            output += letter;
            temp = "";
          }
        } else {
          output += " ";
        }
        //         Check if the last element in the string is an uneven amount of numbers.
        if (i === input.length - 1 && temp.length === 1) {
          return false;
        }
      }
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
