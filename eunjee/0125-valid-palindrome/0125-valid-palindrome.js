/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    const len = str.length;
    const mid = Math.floor(len / 2);

    console.log(str)
    console.log(len)
    console.log(mid)
    for (let i = 0; i < mid; i++) {
        console.log('i:', i)
        if (str[i] !== str[len - i]) {
            console.log('?', i, str[i], str[len - i - 1])
            return false
        }
    }

    return true
};