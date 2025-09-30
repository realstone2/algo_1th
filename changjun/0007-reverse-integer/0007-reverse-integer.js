/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {

    const INT_MAX = 2 ** 31 - 1;  // 2147483647
    const INT_MIN = -(2 ** 31);   // -2147483648
    
    let n = Math.abs(x);
    let result = 0;
    while(n>0){
        let digit = n%10;
        result = result * 10 + digit;
        n = Math.floor(n/10);
    }

    result = x <0 ? -result : result;
    result = (result > INT_MAX  || result < INT_MIN) ? 0 : result;
    return result;
};