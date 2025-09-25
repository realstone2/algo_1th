/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // set과 array의 길이만 비교하여 중복여부를 확인함
    const numsSet = new Set(nums);
    return numsSet.size !== nums.length;
};