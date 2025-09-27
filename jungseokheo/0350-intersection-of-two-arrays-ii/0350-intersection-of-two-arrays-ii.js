/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    let map = new Map();
    let list = [];

    for (num of nums1) {
        let count = map.get(num) || 0
        map.set(num, count + 1);
    }

    for (num of nums2) {
        if (!!map.get(num)) {
            list.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return list;
};