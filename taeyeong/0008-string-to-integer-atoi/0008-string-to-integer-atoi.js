/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // 1. 공백 제거
    s = s.trim();

    // 2. 정규식으로 숫자 부분 추출
    const match = s.match(/^([+-]?\d+)/);

    // 3. 일치하는 부분이 없으면 0 반환
    if (!match) return 0;

    // 4. 숫자 변환
    let num = parseInt(match[0]);

    // 5. 32비트 정수 범위 제한
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;
  
    return num;
};