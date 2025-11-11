/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let left = m - 1
    let right = n - 1
    let current = nums1.length - 1

    while(right >= 0) {
        if(left >= 0 && nums1[left] > nums2[right]) {
            nums1[current] = nums1[left]
            left -=1
        } else {
            nums1[current] = nums2[right]
            right -=1

        }

            current -=1

    }
    
};