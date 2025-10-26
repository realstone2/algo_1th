/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    const obj = {};
    for(const char of s){
        obj[char] = (obj[char] || 0) + 1;
    }
    for(const char of t){
        if(!obj[char]) {
            return false;
        }
        obj[char] -= 1;
    }
    return true;
};