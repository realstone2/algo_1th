/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length < k) {
        k = k % nums.length
    }
    // in-place 방식 사용
    // 1. 배열 전체 reverse
    // 2. k에 해당하는 앞부분 길이의 절반 순회를 통한 reverse
    // 3. 나머지에 해당하는 뒷부분 길이의 절반 순회를 통한 reverse
    nums.reverse();
    for(i = 0; i < k / 2; i++) {
        const K_INDEX = k - 1
        let temp = nums[i]
        nums[i] = nums[K_INDEX - i];
        nums[K_INDEX - i] = temp;
    }
    for(i = 0; i < (nums.length - k) / 2; i++) {
        const LENGTH_INDEX = nums.length - 1
        let temp = nums[i + k]
        nums[i + k] = nums[LENGTH_INDEX - i]
        nums[LENGTH_INDEX - i] = temp
    }
};