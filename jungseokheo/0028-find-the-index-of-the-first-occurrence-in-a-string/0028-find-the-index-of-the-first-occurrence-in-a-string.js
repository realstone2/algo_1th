/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    if (!haystack.includes(needle)) {
        return -1;
    }

    const strLength = haystack.length - needle.length;

    for (let i = 0; i <= strLength; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
};