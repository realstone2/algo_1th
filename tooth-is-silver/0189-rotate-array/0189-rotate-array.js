/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const count = k % nums.length
    if (count === 0) return nums;
    // count는 앞으로 옮기는 횟수. 어차피 옮길거니까 count만큼 잘라서 재배치해도 되지않을까?
    // count가 length보다 클 수도 있으니까 length로 나눈 값으로 계산
    // 아무것도 반환하지말고 원본 배열을 수정하기!
    const spliceNums = nums.splice(nums.length - count, count)
    nums.unshift(...spliceNums)
};