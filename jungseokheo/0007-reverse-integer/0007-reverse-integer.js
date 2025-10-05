/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const isNegative = x < 0;

    let num = Math.abs(x);

    let result = 0;
    while (num > 0) {
        const digit = num % 10;
        // 오버 플로우 체크
        if (result > 214748364 || (result == 214748364 && digit > 7)) {
            return 0;
        }
        result = result * 10 + digit;
        num = Math.floor(num / 10);
    }

    return isNegative ? -result : result;
};