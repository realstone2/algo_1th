/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    let i = 0;
    let n = s.length;

    // 1. Skip leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. Handle optional sign
    let sign = 1;
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Parse digits
    let num = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        i++;
    }

    // 4. Apply sign
    num *= sign;

    // 5. Clamp to 32-bit signed int range
    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;
    return num;
};