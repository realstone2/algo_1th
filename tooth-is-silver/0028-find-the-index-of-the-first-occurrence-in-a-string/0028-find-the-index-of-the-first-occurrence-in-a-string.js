/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let idx = 0;
    const length = needle.length
    while (idx < haystack.length - length + 1 ) {
        if (haystack.substring(idx, idx + length) === needle) return idx;
        idx++
    }
    return -1
};