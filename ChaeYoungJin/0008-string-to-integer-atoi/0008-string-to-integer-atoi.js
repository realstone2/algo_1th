/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = -Math.pow(2, 31)
    
    let i = 0
    
    while (i < s.length && s[i] === ' ') {
        i++
    }
    
    let sign = 1
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1
        i++
    }
    
    let result = 0
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0')
        i++
    }
    
    result = result * sign
    
    if (result < INT_MIN) return INT_MIN
    if (result > INT_MAX) return INT_MAX
    
    return result
};