/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        // 현재 자리가 9보다 작으면, 단순히 1 증가 후 바로 리턴
        // map을 사용해 해당 자리만 +1 처리하고 나머지는 그대로 둠
        if (digits[i] < 9) return digits.map((d, idx) => idx === i ? d + 1 : d);
        digits[i] = 0;
    }

     // 모든 자리가 9였던 경우, 맨 앞에 1 추가
    return [1, ...digits];
};