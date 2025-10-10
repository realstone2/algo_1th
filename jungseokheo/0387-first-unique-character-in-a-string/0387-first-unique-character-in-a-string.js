/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    let count = {};
    
    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};