/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isMinus = x < 0;

    const reverseNum = String(x).split('').reverse().join('');
    const result = isMinus ? -Number(reverseNum.split('-')[0]) : Number(reverseNum) 
    
    const isInteger = -Math.pow(2, 31) <= result && result <= (Math.pow(2, 31) - 1); 
    
    return isInteger ? result : 0;
 };