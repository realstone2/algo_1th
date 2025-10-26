/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.lenght) {
        return -1;
    }

    let start = 0;
    let end = needle.length;

    while (end <= haystack.length) {
        if (haystack.slice(start, end) === needle) {
            return start;
        }
        start++;
        end++;
    }

    return -1;
};