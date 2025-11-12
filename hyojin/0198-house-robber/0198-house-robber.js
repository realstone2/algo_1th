/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let curr = 0;
    let prev = 0; 

    for(let num of nums){
        let temp = curr;
        curr = Math.max(num + prev, curr);
        prev = temp;
    }

    return curr;
};