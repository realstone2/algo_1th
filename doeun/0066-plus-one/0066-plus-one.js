/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    // 뒷 자리부터 순회해서 +1 처리
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    // 전체를 다 돌았을때는 앞자리가 +1 된거니까 1 추가하고 spread...
    return [1, ...digits];
};