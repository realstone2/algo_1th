/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
const result = s
    .toLowerCase()
    .split("")
    .filter(ch => /[a-z0-9]/.test(ch))
    .join("");
  
  const reversedResult = result.split("").reverse().join("");

  return result === reversedResult;
};