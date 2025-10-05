/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX_INT = 2**31 - 1; // 2147483647
    const MIN_INT = -(2**31);  // -2147483648

    // 1. 숫자의 부호 결정 (1 또는 -1)
    const sign = x < 0 ? -1 : 1;
    
    // 2. 절댓값을 문자열로 변환하여 반전
    // Math.abs(x): 절댓값 취하기 (예: -123 -> 123)
    // .toString(): 문자열로 변환 ("123")
    // .split(''): 문자 배열로 변환 (["1", "2", "3"])
    // .reverse(): 배열 반전 (["3", "2", "1"])
    // .join(''): 문자열로 합치기 ("321")
    // Number(...): 숫자로 변환 (321)
    const reversedAbsolute = Number(String(Math.abs(x)).split('').reverse().join(''));

    // 3. 최종 결과 계산 (반전된 절댓값 * 부호)
    const result = reversedAbsolute * sign;

    // 4. 범위 확인 및 반환
    // 결과가 32비트 범위를 벗어나는지 확인
    if (result > MAX_INT || result < MIN_INT) {
        return 0;
    }

    return result;
};