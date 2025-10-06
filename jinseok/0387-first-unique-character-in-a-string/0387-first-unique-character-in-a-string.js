/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const repeatMap = new Map();
    const charCountMap = new Map()

    for(let i = 0; i < s.length; i ++){
        const char = s[i];

        charCountMap.set(char, (charCountMap.get(char) ?? 0) + 1);
    

        if(charCountMap.get(char) > 1){
            repeatMap.delete(char)
            continue;
        }

        repeatMap.set(char, i)
    }

    const iterator = repeatMap.values();
    return iterator.next().value ?? -1

};