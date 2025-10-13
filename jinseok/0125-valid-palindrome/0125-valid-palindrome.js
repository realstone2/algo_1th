/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^A-Za-z0-9]/g,'').toUpperCase();
    const reverse = Array.from(str).reverse().join('')
    console.log(reverse)
    return str === reverse
};