/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let p1 = m - 1;      // nums1의 마지막 유효 요소
    let p2 = n - 1;      // nums2의 마지막 요소
    let p = m + n - 1;   // nums1의 마지막 위치 (채울 위치)
    
    // nums2에 요소가 남아있는 동안 반복
    while (p2 >= 0) {
        // nums1에 비교할 요소가 있고, nums1[p1]이 더 크면
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            // nums2[p2]가 더 크거나 같으면
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    
}