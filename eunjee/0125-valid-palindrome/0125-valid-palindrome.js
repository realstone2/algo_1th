/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    const len = str.length;
    const mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false
        }
    }

    return true
};