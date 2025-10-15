/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed = parseInt(
        Math.abs(x).toString().split('').reverse().join('')
    ) * Math.sign(x);

    return (reversed < -(2**31) || reversed > 2**31 - 1) ? 0 : reversed;
};