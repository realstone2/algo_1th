/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const arr = nums.concat(nums);
    const index = k % nums.length;
    
    const result = arr.splice(arr.length - index - nums.length, nums.length);

    for(let i = 0; i < nums.length; i++){
        nums[i] = result[i];
    }
};