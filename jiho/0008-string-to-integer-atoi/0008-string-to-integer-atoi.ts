const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = -Math.pow(2, 31);

function myAtoi(s: string): number {
    s = s.trimStart();
    if (!s) return 0;
    
    let sign = 1;
    let result = 0;
    let start = 0;
    
    if (s[0] === '+' || s[0] === '-') {
        sign = s[0] === '-' ? -1 : 1;
        start = 1;
    }
    
    for (const char of s.slice(start)) {
        if (char < '0' || char > '9') break;
        
        const digit = Number(char);
        
        result = result * 10 + digit;
        if (result > INT_MAX) return sign === 1 ? INT_MAX : INT_MIN;

    }
    
    return sign * result;
};