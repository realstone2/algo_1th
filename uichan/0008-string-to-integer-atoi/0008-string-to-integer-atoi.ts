function myAtoi(s: string): number {
    const 최대 = 2**31 - 1;  // 2147483647
    const 최소 = -(2**31);    // -2147483648
    
    const n = s.length;
    let i = 0;
    
    // 1단계: 선행 공백 제거
    for (; i < n && s[i] === ' '; i++) {}
    
    // 2단계: 부호 확인
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // 3단계: 숫자 변환
    let result = 0;
    for (; i < n && s[i] >= '0' && s[i] <= '9'; i++) {
        const digit = parseInt(s[i]);
        
        // 4단계: 오버플로우 체크
        if (result > Math.floor(최대 / 10) || 
            (result === Math.floor(최대 / 10) && digit > 최대 % 10)) {
            return sign === 1 ? 최대 : 최소;
        }
        
        result = result * 10 + digit;
    }
    
    return result * sign;
}
