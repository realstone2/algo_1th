/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    const n = nums.length;
    k = k % n; // k가 배열 길이보다 클 경우 대비

    // 뒤에서 k개 자른 부분 + 앞의 나머지 부분
    const rotated = nums.slice(-k).concat(nums.slice(0, n - k));

    // in-place로 nums 수정
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};