/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    const n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    let prevMax = 0;
    let currentMax = 0;

    for (let i = 0; i < n; i++) {
        const temp = Math.max(nums[i] + prevMax, currentMax);

        prevMax = currentMax;
        
        currentMax = temp;
    }

    return currentMax;
};