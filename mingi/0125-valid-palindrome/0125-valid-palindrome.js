/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const validChars = [];
  const lowerS = s.toLowerCase(); 

  for (let i = 0; i < lowerS.length; i++) {
    const char = lowerS[i];

    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      validChars.push(char);
    }
  }

  const cleanString = validChars.join("");

  const reversedString = cleanString.split("").reverse().join("");

  return cleanString === reversedString;
};