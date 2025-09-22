

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersectRecursive = (num1, num2, i, j, result) => {
    if (i > nums1.length || j > num2.length) {
        return result;
    }

    if (num1[i] < num2[j]) {
        return intersectRecursive(num, num2, ++i, j, result);
    }

    if (num1[i] > num2[j]) {
        return intersectRecursive(num, num2, i, ++j, result);
    }

    result.push(num1[i]);
    return intersectRecursive(num1, num2, ++i, ++j, result);
}
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    const result = [];

    let i = 0;
    let j = 0;

    return intersectRecursive(nums1, nums2, i, j, result);
};