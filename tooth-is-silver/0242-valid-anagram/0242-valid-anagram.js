/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let count1 = {}
    for (let i = 0; i < s.length; i++) {
        if (!count1[s[i]]) {
            count1[s[i]] = 1
        } else {
            count1[s[i]] = count1[s[i]] + 1
        }
    }
    let count2 = {}
    for (let j = 0; j < t.length; j++) {
        if (!count2[t[j]]) {
            count2[t[j]] = 1
        } else {
            count2[t[j]] = count2[t[j]] + 1
        }
    }

    for (let key of Object.keys(count1)) {
        if (count1[key] !== count2[key]) return false;
    }
    return true
 };