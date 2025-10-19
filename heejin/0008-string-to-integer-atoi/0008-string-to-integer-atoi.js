/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) =>  {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    s = s.trimStart();

    const match = s.match(/^[-+]?\d+/);
    if (!match) return 0;

    let num = parseInt(match[0]);

    if (num > INT_MAX) return INT_MAX;
    if (num < INT_MIN) return INT_MIN;

    return num;
};