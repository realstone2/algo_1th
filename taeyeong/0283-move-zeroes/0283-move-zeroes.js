/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos = 0; // 0이 아닌 원소를 채워 넣을 위치

    // 모든 0이 아닌 원소를 앞으로 모은다
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i]
            pos++;
        }
    }

    // 남은 자리를 0으로 채운다
    while (pos < nums.length) {
        nums[pos] = 0
        pos++
    }
};