/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function(s) {
    const MIN = -2147483648;  // -2^31
    const MAX = 2147483647;   // 2^31 - 1
    const trimmedStr = s.trim()
    let sign = 1;
    let i = 0;

    // 1. 부호 확인
    if (trimmedStr[0] === '+' || trimmedStr[0] === '-') {
        sign = trimmedStr[0] === '-' ? -1 : 1;
        i = 1;  // 다음 인덱스부터 시작
    }
    
    // 2. 숫자 추출
    let numStr = '';
    for (; i < trimmedStr.length; i++) {
        // 문자열을 비교 연산자로 비교하는 것도 좋은 접근이다
        if(trimmedStr[i] < '0' || trimmedStr[i] > '9') {
            break;
        } else {
            numStr += trimmedStr[i]
        }
    }
    const result = sign * Number(numStr)
    if (result < MIN) return MIN;
    if (result > MAX) return MAX;
    return result;
};