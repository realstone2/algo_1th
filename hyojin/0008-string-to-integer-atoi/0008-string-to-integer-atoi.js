/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const result = parseInt(s) ? parseInt(s) : 0;
    const min = - Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;

    if(result > max) return max;
    if(result < min) return min;

    return result;
};