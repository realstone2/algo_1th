/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let str = s;

    let sign = 1;
    let digit = '';

    // leading whitespace
    if (str[0] === ' ') {
        let i = 1;
        while (i < str.length) {
            if (str[i] !== ' ') {
                str = str.slice(i);
                break;
            }
            i++;
        }
    }
    
    // leading sign
    if (str[0] === '-' | str[0] === '+') {
        sign = str[0] === '+' ? 1 : -1;
        str = str.slice(1);
    }

    let i = 0;
    while (isNumeric(str[i])) {
        i++
    }


    digit = str.slice(0, i);

    if (!digit) {
        return 0
    }

    return Math.max(-(2 ** 31), Math.min(parseFloat(digit) * sign, 2 ** 31 - 1));
};

function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}