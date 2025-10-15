

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersectRecursive = (nums1, nums2, i, j, result) => {
    if (i >= nums1.length || j >= nums2.length) {
        return result;
    }

    if (nums1[i] < nums2[j]) {
        return intersectRecursive(nums1, nums2, ++i, j, result);
    }

    if (nums1[i] > nums2[j]) {
        return intersectRecursive(nums1, nums2, i, ++j, result);
    }

    result.push(nums1[i]);
    return intersectRecursive(nums1, nums2, ++i, ++j, result);

}
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    const result = [];

    let i = 0;
    let j = 0;

    return intersectRecursive(nums1, nums2, i, j, result);
};