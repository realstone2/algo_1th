/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const asciiRegex = /^[a-zA-Z0-9]+$/
    s = [...s.toLowerCase()].filter(word => asciiRegex.test(word)).join('')
    
    let first = 0;
    let second = s.length - 1;
    while (first < second) {
        if (s[first] !== s[second]) return false;
        first++
        second--
    }
    return true;
};