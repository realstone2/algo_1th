/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let result = 0
    for(i = 0; i < nums.length; i++) {
        // 비트연산자 사용으로 같은 값을 상쇄
        result = result ^ nums[i]
    }
    return result
};