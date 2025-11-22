/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // sum의 최대값을 담는 변수 하나 필요 -> 갱신
    // 결국 짝수의 합이 더 많은지 홀수의 합이 더 많은지가 아닐까..?
    // 가 아니라 그냥 연속이 안되는 것
    // dp(i) = max(dp(i-1), nums[i] + dp(i-2))

    const dp = []

    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    let evenSum = 0

    for (let i = 2 ; i < nums.length; i++){
        dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
    }
    
    return dp[nums.length -1]
};