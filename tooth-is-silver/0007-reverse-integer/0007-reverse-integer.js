/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const str = String(x)
    let result = str[0] === '-' ? '-' : ''
    const end = str[0] === '-' ? 1 : 0 
    for (let i = str.length - 1; i >= end; i--) {
        result += str[i]
    }
    
    // 숫자가 너무 크면 0으로 반환
    if (result > 2147483647 || result < -2147483648) return 0;
    return Number(result)
};