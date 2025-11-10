/**
 * @param {number[]} nums
 * @return {number}
 */


var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let prevPrevMax = nums[0];
    let prevMax = Math.max(nums[0], nums[1]);
    let currentMax = prevMax;
    // 지금 i에서 집을 털지 말지 정하는기준
    for(i = 2; i < nums.length; i ++) {
        if(prevPrevMax + nums[i] > prevMax) {
            // 턴다: i - 2까지 턴 값 + i에서 털 값 > i - 1까지 턴 값
            currentMax = prevPrevMax + nums[i];
        } else {
            // 안턴다: 반대
            currentMax = prevMax;
        }
        prevPrevMax = prevMax;
        prevMax = currentMax;
    }
    return currentMax;
};