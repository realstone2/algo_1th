/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length < k) {
        k = k % nums.length
    }
    let newNums = []
    // k 이후 요소를 newNums에 추가
    for (i = nums.length - k; i < nums.length; i++) {
        newNums.push(nums[i])
    }
    // k 이전 요소를 newNums에 추가
    for (i = 0; i < nums.length - k; i++) {
        newNums.push(nums[i])
    }
    // 재할당을 하면 참조가 바뀌므로 참조를 유지한 상태로 배열 요소만 newNums 것으로 전면 교체
    for (i = 0; i < nums.length; i++){
        nums[i] = newNums[i]
    }
};