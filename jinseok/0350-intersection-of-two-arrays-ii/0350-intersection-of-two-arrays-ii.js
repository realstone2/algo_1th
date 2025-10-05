/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const intersection = [];

    const nums1Map = new Map();

    nums1.forEach(v => {
        nums1Map.set(v, (nums1Map.get(v) ?? 0) + 1);
    })

    nums2.forEach(num => {
        if(!!nums1Map.get(num)){
            intersection.push(num);
            nums1Map.set(num, (nums1Map.get(num) ?? 0) - 1);
        }
    })


    return intersection;
};