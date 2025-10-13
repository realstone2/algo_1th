const buildFrequencyMap = (str) => {
    const map = {}
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    return map
}

const validateAnagram = (str, map) => {
    for (let char of str) {
        if (!map[char]) return false;
        map[char]--
    }
    return true
}


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    const charCount = buildFrequencyMap(s);
    return validateAnagram(t, charCount);
};