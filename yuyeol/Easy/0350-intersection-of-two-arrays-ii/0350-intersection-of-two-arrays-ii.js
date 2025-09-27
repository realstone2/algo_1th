/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // 형변환의 번거로움 배제를 위해 맵 자료형으로 개선
    const numsMap1 = new Map();
    for(let i = 0; i < nums1.length; i++) {
        // 맵에 nums1 배열에 대한 key: 요소 값, value: 갯수 저장
        if(numsMap1.has(nums1[i])) {
            numsMap1.set(nums1[i], numsMap1.get(nums1[i]) + 1)
        } else {
            numsMap1.set(nums1[i], 1)
        }
    }
    const result = []
    for(let i = 0; i < nums2.length; i++) {
        // nums2의 현재 숫자가 numsMap1에 있는지 확인 && 갯수가 0개면 실행 생략
        // 있으면 결과에 추가하고 카운트를 1 감소
        if(numsMap1.has(nums2[i]) && numsMap1.get(nums2[i]) > 0) {
            numsMap1.set(nums2[i], numsMap1.get(nums2[i]) - 1)
            result.push(nums2[i])
        }
    }   
    return result;
};