function climbStairs(n: number): number {
    if (n < 4) return n

    const dp = [0, 1, 2, 3]

    for (let i = 4; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
};

/**
1: 1
2: 2
3: 3
4: 5 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2 
 */