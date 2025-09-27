/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
    // 하나를 기준으로 뺀 값을 가지고 있는지?
    // find > 배열을 내부적으로 다 탐색함.. 중복된 값도 찾아서 자신을 제외한 조건을 넣어야함.
   const map = new Map()

   for (let i=0; i<nums.length; i++) {
    const degree = target - nums[i]
    if(map.has(degree)) {
        return [map.get(degree), i]  // 먼저 찾은 인덱스, 현재 인덱스
    }
    map.set(nums[i], i)
   }
};