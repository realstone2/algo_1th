/**
 * @param {string} s
 * @return {number}

 1. 중복되지 않는 문자를 찾는다.
 2. 중복이 되지 않는다면 -1을 반환한다.
 */
var firstUniqChar = function(s) {
    const charCounts = {};

    for (const char of s) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (charCounts[char] === 1) {
            return i;
        }
    }

    return -1;
};