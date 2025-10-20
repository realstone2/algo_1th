/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const result = haystack.indexOf(needle); 

    return result >= 0 ? result : -1;  
};