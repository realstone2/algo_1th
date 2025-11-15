/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // subArray의 최대값 구하기
    // subArray : 연속된 배열
    // maxSum 을 두고, Math.max()를 이용하여 현재까지 최대 연속합이 나은가 새로시작하는 게 나은가를 비교

    let maxSum = nums[0]
    let sum = 0

    for (let i = 0 ; i < nums.length ; i++){
        sum += nums[i]
        
        if (sum < nums[i]){
            sum = nums[i]
        }
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
};