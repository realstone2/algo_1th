/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const trimmedStr = s.trim();
    
    if(trimmedStr.length === 0) return 0;
    
    let index = 0;
    let sign = 1;
    let result = 0;
    
    if(trimmedStr[index] === '-' || trimmedStr[index] === '+'){
       sign = trimmedStr[index] === '-' ? -1 : 1;
       index++;
    }
    
    const INT_MAX = 2147483647; 
    const INT_MIN = -2147483648;
    
    while (index < trimmedStr.length && trimmedStr[index] >= '0' && trimmedStr[index] <= '9') {
        const digit = parseInt(trimmedStr[index]);
       if (result > Math.floor(INT_MAX / 10) || 
           (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
           return sign === 1 ? INT_MAX : INT_MIN;
       }
        
        result = result*10 + digit;
        
        index++;
    }
    
    
    return sign*result;
    
    
};