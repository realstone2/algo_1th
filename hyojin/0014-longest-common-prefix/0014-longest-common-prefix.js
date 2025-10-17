/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = [];

    for(let i = 0; i < strs[0].length; i++){
        const char = strs[0][i];

         for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== char) {
                return result.join('');
            }
        }
        
        result.push(char);

    }

    return result.join('')
};