/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
    //이미 오름차순으로 정렬되어 있음
    let i = m - 1;  // nums1의 마지막 유효 요소
    let j = n - 1;  // nums2의 마지막 요소
    let k = m + n - 1;  // 채울 위치 (맨 뒤)

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};