/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 0이 아닌 원소를 수집함
    const nonZeroNums = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nonZeroNums.push(nums[i]);
        }
    }

    // 1. 0이 아닌 원소 배열을 원본배열 앞부분에 초기화
    // 2. 이후 남은 원소 자리에는 0을 초기화
    for(let i = 0; i < nums.length; i++) {
        if(i < nonZeroNums.length) {
            nums[i] = nonZeroNums[i];
        } else {
            nums[i] = 0
        }
    }
    console.log(nonZeroNums)
    
};