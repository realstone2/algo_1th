/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((singleNum, num) => singleNum ^ num, 0);
};