/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    
    let rev = 0;
    
    while (x !== 0) {
        let pop = x % 10;
        
        x = (x / 10) | 0;
        
        // 오버플로우 체크
        if (rev > Math.trunc(INT_MAX / 10) || (rev === Math.trunc(INT_MAX / 10) && pop > 7)) {
            return 0;
        }
        if (rev < Math.trunc(INT_MIN / 10) || (rev === Math.trunc(INT_MIN / 10) && pop < -8)) {
            return 0;
        }
        
        rev = rev * 10 + pop;
    }
    
    return rev;
};