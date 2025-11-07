/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 0이 있으면 일단 교체함
    let first = 0;
    let second = 0;
    while (first < m + n) {
        if (nums1[first] === 0) {
            nums1[first] = nums2[second]
            second++
        }
        first++
    }

    // 앞 뒤 교체하면서 정렬
    let idx = 0;
    while (idx < m + n) {
        console.log(nums1[idx], nums1[idx + 1])
        // 앞이 뒤보다 크면 뒤로보내고 처음부터 다시
        if (nums1[idx] > nums1[idx + 1]) {
            const a = nums1[idx];
            const b = nums1[idx + 1];
            nums1[idx + 1] = a;
            nums1[idx] = b;
            idx = 0
        } else {
            idx++
        }
    }
};