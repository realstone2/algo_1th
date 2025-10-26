/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    // 공백 제거 후 부호와 숫자만 추출
    // ^: 문자열의 시작부터 매칭
    // [+-]?: 부호 0개 또는 1개
    // \d+: 숫자 1개 이상
    const match = s.trim().match(/^[+-]?\d+/);
    
    // 매치 안되면 0
    if (!match) return 0;
    
    // 숫자 변환
    const num = parseInt(match[0]);
    
    // 범위 체크
    const MAX = 2147483647;
    const MIN = -2147483648;
    
    if (num > MAX) return MAX;
    if (num < MIN) return MIN;
    
    return num;
};