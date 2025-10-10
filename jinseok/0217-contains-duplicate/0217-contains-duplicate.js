/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numbSet = new Set(nums)
    return numbSet.size !== nums.length
};