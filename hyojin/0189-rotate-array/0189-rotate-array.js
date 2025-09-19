/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const rotateNum = nums.length > k ? k : k%(nums.length)
    const rotateArr = nums.splice(-rotateNum, rotateNum)
    
    nums.unshift(...rotateArr)
};