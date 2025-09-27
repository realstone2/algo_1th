/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // [1,0,0]이면 100으로 생각하면 되지않을까?
    // 배열을 숫자로 바꾸고 1을 증가시킨 후 다시 배열로 반환한다
    // const number = Number(digits.join(''))
    // return [...String(number + 1)].map(Number)
    // Number가 너무 커서 테스트코드를 통과 못함
    
    // plus와 index 변수를 사용하여 반복문 처리
    let plus = 1;
    let index = digits.length - 1;

    // 더 이상 올릴게 없을 때 까지만 동작
    while (plus === 1) {
        if (index < 0) {
            digits.unshift(1)
        }

        if (digits[index] === 9) {
            // 현재 값이 9라면 0으로 바꾸고 plus는 그대로 놔둠 -> 계속 1만큼 올려야하기때문
            digits[index] = 0;
            index -= 1
        } else {
            // 9가 아니라면 연산할 필요없이 바로 반환
            digits[index] += 1;
            plus = 0
        }
    }
    return digits
};