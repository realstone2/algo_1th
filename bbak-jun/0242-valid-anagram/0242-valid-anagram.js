/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const [sDict, tDict] = [dictWords(s), dictWords(t)]

    if(Object.keys(sDict).length !== Object.keys(tDict).length) return false

    for(const [char, count] of Object.entries(sDict)) {
        if(!tDict[char]) return false

        if(tDict[char] !== count) return false
    }

    return true
};

const dictWords = (str) => {
    const dict = {}

    for(const char of str.split("")) {
        if(!!dict[char]) {
            dict[char] += 1
        } else {
            dict[char] = 1
        }
    }

    return dict
}