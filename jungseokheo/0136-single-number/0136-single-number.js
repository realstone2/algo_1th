/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set = new Set();
    for (num of nums) {
        set.has(num) ? set.delete(num) : set.add(num);
    }
    return [...set][0];
};