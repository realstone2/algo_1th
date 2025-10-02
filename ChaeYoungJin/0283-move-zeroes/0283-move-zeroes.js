/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    const newNums = nums.filter(num => num !== 0)
    const len = nums.length - newNums.length
    if (len > 0){
        const ArrZero = Array(len).fill(0)
        const result = [...newNums, ...ArrZero];

        nums.splice(0, nums.length, ...result);
    } 

};