/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let start = 0; // 0이 아닌 숫자를 넣을 위치

    // 0이 아닌 숫자들을 앞으로 이동
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] !== 0) {
            nums[start] = nums[end];
            start++;
        }
    }

    // 나머지 자리를 0으로 채우기
    for (let i = start; i < nums.length; i++) {
        nums[i] = 0;
    }
};