/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1; 
    let p2 = n - 1; 
    let mergeIndex = m + n - 1; 

    // nums2에 아직 처리되지 않은 요소가 남아있는 동안 반복
    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[mergeIndex] = nums1[p1];
            p1--; // nums1 포인터 이동
        } 
        else {
            nums1[mergeIndex] = nums2[p2];
            p2--; // nums2 포인터 이동
        }
        
        mergeIndex--;
    }
};