/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 브루트포스 방식으로 접근
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            // 같은 인덱스끼리는 더할 수 없으므로 무시
            if(i === j) continue;
            // 인덱스가 다를 경우 더해보고 타겟과 값이 동일하면 배열로 리턴
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
};