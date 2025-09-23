/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    let plus = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
       let sum = digits[i] + plus;
       
       sum % 10 > 0 ? digits[i] = sum : digits[i] = sum % 10;
       plus = Math.floor(sum / 10);
    }

    if (plus === 1) {
        digits.unshift(plus);
    }

    return digits;
};