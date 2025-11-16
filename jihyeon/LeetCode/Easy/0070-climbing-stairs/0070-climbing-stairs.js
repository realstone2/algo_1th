/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = new Array(n + 1).fill(0);

    const recursion = (step) => {
        if(step <= 1){
            return 1;
        }

        if(memo[step] !== 0){
            return memo[step];
        }

        memo[step] = recursion(step - 1) + recursion(step - 2);
        return memo[step];
    }
    return recursion(n);
};