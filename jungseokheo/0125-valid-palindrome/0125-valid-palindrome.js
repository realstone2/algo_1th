/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    let converted = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed = converted.split('').reverse().join('');
    
    return converted === reversed;
};