/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1

    if(m === 0){
        nums1.splice(0, n, ...nums2)
        return
    }

    while(j >= 0 && i >= 0){
        if(i===0 && j >= 0){
            nums1.splice(nums1[i] <= nums2[j] ? i + 1 : 0 ,0, nums2[j]);
            j--
            continue;
        }


        if(nums1[i] <= nums2[j]){
            nums1.splice(i + 1 ,0, nums2[j]);
            j--;
            continue;
        }

        i--;
    }

    nums1.splice(-n, n)
};