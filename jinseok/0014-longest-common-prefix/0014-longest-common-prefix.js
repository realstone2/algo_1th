/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let firstStr = strs[0]
    for(let i = firstStr.length - 1; i >= 0; i --){
        const prefixString = firstStr.slice(0,i + 1)
        const checkList = strs.slice(1,)

        if(checkList.every(str => str.slice(0, prefixString.length) === prefixString)) {
            return prefixString
        }
    }

    return ''
    
};