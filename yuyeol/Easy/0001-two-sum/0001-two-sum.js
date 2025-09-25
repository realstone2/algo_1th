/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 브루트포스 방식으로 접근
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        // j가 i + 1이 되면 j가 i 이전 인덱스를 순회할 필요가 없어져서 이미 계산해본 것을 중복 계산할 필요가 없어짐
        for(let j = i + 1; j < nums.length; j++) {
            // 인덱스가 다를 경우 더해보고 타겟과 값이 동일하면 배열로 리턴
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
};