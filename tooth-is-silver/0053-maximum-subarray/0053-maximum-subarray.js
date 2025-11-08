/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];      // 전체 최대값
    let currentSum = nums[0];  // 현재까지의 합
    
    for (let i = 1; i < nums.length; i++) {
        // 탐욕적 선택: 이어갈지 vs 새로 시작할지
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};