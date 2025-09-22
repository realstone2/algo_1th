/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // [2,5,7,5] [5,2]일때 [5,2] 혹은 [2,5]모두 가능한 정답이므로 해당 값이 있는지 확인하여 반환
    // gpt한테 hasMap 힌트 받음
    const hashMap = {}
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        if (hashMap[nums1[i]]) {
            hashMap[nums1[i]] += 1
        } else {
            hashMap[nums1[i]] = 1
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (hashMap[nums2[j]]) {
            result.push(nums2[j])
            hashMap[nums2[j]] -= 1
        }
    }

    return result
};