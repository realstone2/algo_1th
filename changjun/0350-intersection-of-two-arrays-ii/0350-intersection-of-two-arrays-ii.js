/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hashmap = new Map();
    let result = []
    
    // 작은 배열을 뽑음.
    const baseArr = nums1.length < nums2.length ? [...nums1] : [...nums2];
    const targetArr = nums1.length < nums2.length ? nums2 : nums1

    // 작은배열 순회
    for(let key of baseArr){
        hashmap.set(key, (hashmap.get(key) || 0) + 1)
    }
 
     // 큰 배열 돌면서 교집합 확인
    for (let num of targetArr) {
        // 한개 이상 나온거
        if (hashmap.get(num) > 0) {
            result.push(num);                // 결과에 추가
            hashmap.set(num, hashmap.get(num) - 1); // 카운트 감소
        }
    }

    return result;

  
    

    
};