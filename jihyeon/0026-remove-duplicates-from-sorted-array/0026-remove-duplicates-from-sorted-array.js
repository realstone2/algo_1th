/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {    
    const set = Array.from(new Set(nums));
    nums.splice(0, nums.length - set.length)
    
    for(let i = 0; i < nums.length ; i++){
        nums[i] = set[i];
    }
    
    return nums.length;
};