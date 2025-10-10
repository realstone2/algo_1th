/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 실패한 방법
// var plusOne = function(digits) {
//     // 배열을 하나로 합쳐서 +1
//     const increasedNum = Number(digits.join('')) + 1;
//     // 다시 배열로 분해
//     const result = String(increasedNum).split('').map(Number);
//     return result;
// };

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 9) {
            // 9일때는 다음 자릿수를 올려주면서 0이 됨
            digits[i] = 0;
        } else {
            // 9가 아닐경우 그냥 1 올려주고 그대로 리턴함
            digits[i] += 1;
            return digits;
        }
    }
    // for문을 통과했다는것은 digits가 모두 0이 된 것이므로 맨앞에 1을 붙여줌
    digits = [1, ...digits];
    return digits;
};