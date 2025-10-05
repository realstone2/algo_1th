const INT_MAX = 2147483647;
const INT_MIN = -2147483647

function reverse(x: number): number {
    const sign = x < 0 ? -1 : 1;
    const result = sign * reverseNumber(Math.abs(x), 0);
    
    if (result > INT_MAX || result < INT_MIN) return 0;
    
    return result;
}

function reverseNumber (x: number, result:number): number {
    if(x < 1) return result
    return reverseNumber(Math.floor(x / 10), result * 10 + x % 10)
};