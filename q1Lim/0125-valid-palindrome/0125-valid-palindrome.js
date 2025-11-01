/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const refined = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return refined === refined.split('').reverse().join('')
    
};