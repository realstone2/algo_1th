/**
 * @param {number} x
 * @return {number}
 */

const MAX = Math.pow(2, 31) - 1;
const MIN = -Math.pow(2, 31);

var reverse = function(x) {
    const isMinus = x < 0;
    const xString = String(Math.abs(x));
    let res = 0;
    for(i = 0; i < xString.length; i++) {
        const digit = Number(xString[i]);
        const reversedDigit = digit * Math.pow(10, i);
        res += reversedDigit;
        if(res > MAX) return 0; 
    }
    return isMinus ? -res : res
};