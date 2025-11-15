/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    if (n <= 1) {
        return n;
    }

    let prev = 1; 
    let current = 2; 

    for (let i = 3; i <= n; i++) {
        const next = prev + current;

        prev = current; 
        current = next; 
    }

    return current;
};