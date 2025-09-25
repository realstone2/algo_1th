/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length; 
    const rotated = [...nums.slice(-k), ...nums.slice(0, nums.length - k)];
    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i]; 
    }
};