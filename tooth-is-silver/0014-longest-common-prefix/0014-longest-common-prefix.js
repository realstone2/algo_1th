/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0]
    
    let result = ''
    // flower, flow, flight를 돌면서 '', 'f', 'fl', 'flo', 'flow', 'flower'가 prefix로 있는지 확인
    let i = 0;
    while (i < strs[0].length + 1) {
        const prefix = strs[0].substring(0, i)
        for (let j = 0; j < strs.length; j++) {
            if (prefix !== strs[j].substring(0, i)) {
                return prefix.substring(0, i - 1)
            }
        }
        i++
    }

    return result
};