/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const char = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const charReverse = char.split('').reverse().join('');
    const result = char === charReverse;

    return result;
};