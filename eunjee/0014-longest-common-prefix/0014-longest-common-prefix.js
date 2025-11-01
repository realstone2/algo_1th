/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let end = 0;

    const shortest = Math.min(...strs.map(str => str.length))

    let result = true;

    while (end <= shortest && result) {
        end++;
        const prefix = strs[0].slice(0, end);

        console.log(end, prefix)
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].slice(0, end) !== prefix) {
                result = false;
                break;
            }
        }
    }

    return strs[0].slice(0, end - 1);
};