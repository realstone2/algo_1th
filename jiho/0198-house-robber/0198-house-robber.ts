function rob(nums: number[]): number {
    const n = nums.length
    
    if (n === 0) return 0
    if (n === 1) return nums[0]
    // n 번째 집에 갔을 때 훔친돈 최댓값 
    const dp = Array(nums.length).fill(0)

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for(let i = 2; i < nums.length; i ++) {
        dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
    }

    return dp[n-1]
};