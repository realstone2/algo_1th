/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
};