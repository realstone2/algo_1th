/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        currentMax = Math.max(num, currentMax + num);

        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
};