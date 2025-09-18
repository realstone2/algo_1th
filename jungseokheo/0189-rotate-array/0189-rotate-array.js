/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;

    if (k === 0) return;

    let pre = nums.slice(nums.length - k);
    let suff = nums.slice(0, nums.length - k);
    let array = pre.concat(suff);

    nums.splice(0, nums.length, ...array);
};