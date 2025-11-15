/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k  = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            // i가 유효하고 nums1[i]가 더 크면
            nums1[k] = nums1[i];
            i--;
        } else {
            // i가 끝났거나, nums2[j]가 더 크거나 같으면
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};