/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^A-Za-z]/g,'').toUpperCase();
    console.log(str)
    const reverse = Array.from(str).reverse().join('')
    return str === reverse
};