/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
    const result = new Array(len)

    for ( let i = 0; i < len; i++){
        const newIndex = (i + k)%len
        result[newIndex] = nums[i]
    }

    for (let i = 0; i < len; i++){
        nums[i] = result[i]
    }
};