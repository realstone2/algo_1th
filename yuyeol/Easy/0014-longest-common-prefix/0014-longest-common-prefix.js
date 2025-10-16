/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstItem = strs[0]
    let finalIndex = firstItem.length;
    for(let i = 1; i < strs.length; i++){
        for( let j = 0; j < finalIndex; j++) {
            if(strs[i][j] !== strs[0][j]) {
                if(j === 0) return ""
                finalIndex = j
            }
        }

    }
    return firstItem.slice(0, finalIndex)
};