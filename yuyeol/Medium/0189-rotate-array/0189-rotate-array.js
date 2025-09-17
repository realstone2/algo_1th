/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length < k) {
        k = k % nums.length
    }
    nums.reverse();
    for(i = 0; i < k / 2; i++) {
        const K_INDEX = k - 1
        let temp = nums[i]
        nums[i] = nums[K_INDEX - i];
        nums[K_INDEX - i] = temp;
    }
    for(i = 0; i < (nums.length - k) / 2; i++) {
        const LENGTH_INDEX = nums.length - 1
        let temp = nums[i + k]
        nums[i + k] = nums[LENGTH_INDEX - i]
        nums[LENGTH_INDEX- i] = temp
    }
};