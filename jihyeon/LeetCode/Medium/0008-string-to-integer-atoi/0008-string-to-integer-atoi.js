/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');

        if (result * sign > Math.pow(2,31) - 1) return Math.pow(2,31) - 1;
        if (result * sign < -Math.pow(2,31)) return -Math.pow(2,31);
        
        i++;
    }
    
    return result * sign;
};