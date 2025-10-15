/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

 1. 오름차순으로 정렬한다.
 2. 0의 개수를 체크하고, 0의 개수만큼 오른쪽으로 옮긴다.
 */
var moveZeroes = function(nums) {
    let pointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pointer] = nums[i];
            pointer++;
        }
    }

    for (let i = pointer; i < nums.length; i++) {
        nums[i] = 0;
    }
};