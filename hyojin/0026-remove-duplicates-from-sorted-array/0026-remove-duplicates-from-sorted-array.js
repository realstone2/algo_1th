/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0; 

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[count]){
            count++;
            nums[count] = nums[i];
        }
    }
    return count+1;
};