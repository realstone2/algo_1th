/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    // 1단계
    let i = 0;
    
    while(i < s.length && s[i] === ' ') {
        i++;
    }
    // 2단계
    let mark = 1;
    if (i < s.length && s[i] === '-') {
        mark = -1;
        i++;
    } else if (i < s.length && s[i] === '+') {
        i++;
    }
    // 3단계
    let result = 0;

    while (i < s.length) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            result = result * 10 + Number(char);
        } else {
            break;
        }

        i++;
    }

    result = result * mark;

    const MAX = 2**31 - 1;
    const MIN = -(2**31);

    if (result < MIN) {
        return MIN;
    } else if (result > MAX) {
        return MAX;
    } else {
        return result;
    }
};