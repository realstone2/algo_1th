/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const asciiRegex = /^[a-zA-Z0-9]+$/
    let str = ''
    // s = [...s.toLowerCase()].filter(word => asciiRegex.test(word)).join('')
    for (const word of s.toLowerCase()) {
        if (asciiRegex.test(word)) str += word
    }
    
    let first = 0;
    let second = str.length - 1;
    while (first < second) {
        if (str[first] !== str[second]) return false;
        first++
        second--
    }
    return true;
};