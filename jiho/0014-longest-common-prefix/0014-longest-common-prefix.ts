function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 1) return strs[0]

    let result = ''

    for(let i = 0; i < strs[0].length; i++){
        const pick = strs[0][i]

        for(let j = 1; j< strs.length; j++) {
            if(strs[j][i] !== pick) return result
        }

        result += pick
    }

    return result
};