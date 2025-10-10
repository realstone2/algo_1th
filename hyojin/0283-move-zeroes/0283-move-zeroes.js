/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const count = nums.filter(zero => zero === 0).length;
    const zeroArr = new Array(count).fill(0)

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0)  {
            nums.splice(i, 1);
            i--;
        }
    }   
    
    nums.push(...zeroArr)
};