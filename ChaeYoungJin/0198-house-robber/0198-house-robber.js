/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev = 0;
    let curr = 0;
    
    for (const num of nums) {
        const temp = Math.max(curr, prev + num);
        prev = curr;
        curr = temp;
    }
    
    return curr;
};