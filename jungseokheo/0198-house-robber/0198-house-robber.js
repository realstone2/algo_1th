/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    if (nums.length === 1) return nums[0];  // 추가!
    
    let maxSum = nums[0];
    let prev = 0;

    for (let i = 1; i < nums.length; i++) {
        let current = Math.max(prev + nums[i], maxSum);
        
        prev = maxSum;
        maxSum = current;
    }

    return maxSum;
};