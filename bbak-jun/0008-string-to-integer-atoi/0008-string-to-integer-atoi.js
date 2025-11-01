/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trimStart(); 
    if (s.length === 0) return 0;

    let sign = 1; 
    let i = 0;

    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    let num = 0;
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));

        if (sign === 1 && num > MAX) return MAX;
        if (sign === -1 && -num < MIN) return MIN;

        i++;
    }

    return sign * num;
};