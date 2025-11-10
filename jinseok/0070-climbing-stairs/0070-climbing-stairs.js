/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const stepMap = new Map();

    stepMap.set(1, 1);
    stepMap.set(2, 2);
    for(let i = 3; i <= n; i ++){
        stepMap.set(i, stepMap.get(i - 2) + stepMap.get(i - 1));
    }

    return stepMap.get(n)
};