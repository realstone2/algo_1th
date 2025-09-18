/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let uniqueNumber = 0;
    
    for (let num of nums) {
        uniqueNumber ^= num; 
    }
    
    return uniqueNumber;
};