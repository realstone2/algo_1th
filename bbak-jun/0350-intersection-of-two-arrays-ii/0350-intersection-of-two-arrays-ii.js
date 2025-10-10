/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const [first, second] = nums1.length >= nums2.length ? [nums2, nums1] : [nums1, nums2]

    const result = []
    const map = new Map()

    for(const num of first) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    for(const num of second) {
        if(map.has(num) && map.get(num) > 0) {
            result.push(num)
            map.set(num, map.get(num) - 1)
        }
    }

    return result
}; 