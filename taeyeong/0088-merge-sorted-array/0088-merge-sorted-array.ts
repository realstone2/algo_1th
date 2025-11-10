/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // nums1 = [1,2,3,0,0,0]
    // nums2 = [2,5,6]
    // m = 3, n = 3
    // nums1 의 뒤에 0은 nums2의 길이이다.
    let p1 = m - 1;                    //2
    let p2 = n - 1;                    //2
    let p = m + n - 1;                 //5

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    } 
};