/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newSet = [...new Set(nums)];
    return newSet.length !== nums.length
    
};