/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].length <= i) {
                return strs[0].substring(0, i);
            }

            if (strs[0][i] !== strs[j][i]) {
                return strs[0].substring(0, i);
            }
        }
    }
    
    return strs[0];
};