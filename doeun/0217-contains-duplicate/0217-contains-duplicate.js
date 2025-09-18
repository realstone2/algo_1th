/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    return [...new Set(nums)].length !== nums.length
};