/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = function(nums1, nums2) {
    const map = {};
    const result = [];
    
    // nums1 중복 체크
    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }
    
    // nums2에서 찾아서 있으면 푸시
    for (let num of nums2) {
        if (map[num]) {
            result.push(num);
            map[num]--;
        }
    }
    
    return result;
};