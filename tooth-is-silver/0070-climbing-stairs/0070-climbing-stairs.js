/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 4이면 5
    // 1+1+1+1, 1+2+1, 1+1+2, 2+1+1, 2+2
    // 5이면 8
    // 1+ ...1, 1+1+2+1, 1+2+1+1, 1+1+1+2, 2+1+1+1, 1+2+2, 2+1+2, 2+2+1, 

    if (n===1) return 1
    if (n===2) return 2
    // 1,2,3,5,8 피보나치수열
    return climbStairs(n - 1) + climbStairs(n - 2)
};