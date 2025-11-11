/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0){
        return 0;
    }

    if(nums.length === 1){
        return nums[0]
    }

    if(nums.length === 2){
        return Math.max(nums[0], nums[1])
    }

    let prevprev = nums[0];
    let prev = Math.max(nums[0], nums[1]);

    for(let i = 2; i < nums.length; i++){
        
        const newSum = Math.max(prevprev + nums[i], prev);
        console.log(newSum, prevprev, nums[i])
        prevprev = prev;
        prev = newSum;
    }

    return prev
};