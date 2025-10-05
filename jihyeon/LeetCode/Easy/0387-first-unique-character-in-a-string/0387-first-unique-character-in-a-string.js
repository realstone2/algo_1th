/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const obj = {};
    s.split('').forEach(x => obj[x] = (obj[x] || 0) + 1);
    const arr = Object.entries(obj).filter(x => x[1] === 1);
    return arr.length == 0 ? -1 : s.indexOf(arr[0][0]);
};