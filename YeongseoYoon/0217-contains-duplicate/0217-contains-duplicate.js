/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newArr = new Set([...nums]);
    return newArr.size !== nums.length; 
};