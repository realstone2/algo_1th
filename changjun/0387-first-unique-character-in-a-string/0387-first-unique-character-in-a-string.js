/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const counts = {}; 

    // 각 문자 개수 세기
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        counts[char] = counts[char] === undefined ? 1 : counts[char] + 1;
    }

   
    for (let i = 0; i < s.length; i++) {
        if (counts[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};