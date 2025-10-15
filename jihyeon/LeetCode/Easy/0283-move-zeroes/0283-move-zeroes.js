/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start = 0;
    let end = start + 1;
    const temp = [...nums];

    while(start < nums.length && end < nums.length) {
        if(nums[start] === 0){
            if(nums[end] === 0){
                end++;
                continue;
            }else{
                temp[end] = nums[start];
                nums[start] = nums[end];
                nums[end] = temp[end];
                start++;
                end++;
            }
        }else{
            start++;
            end++;
        }
    }
};