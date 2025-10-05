/**
 * @param {number} x
 * @return {number}
 */

const MAX = Math.pow(2, 31) - 1;
const MIN = -Math.pow(2, 31);

var reverse = function(x) {
    const isNegative = x < 0;
    const xString = String(Math.abs(x));
    let sum = 0;
    for(i = 0; i < xString.length; i++) {
        const digit = Number(xString[i]);
        const reversedDigit = digit * Math.pow(10, i);
        sum += reversedDigit;
        if(sum > MAX) return 0; 
    }

    const res = isNegative ? -sum : sum;
    if(res < MIN || res > MAX) return 0;
    return res;
};