/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 탐색에 참조할 값을 Set으로 저장
    const numsSet = new Set(nums);
    for(i = 0; i < nums.length; i++) {
        if(numsSet.has(nums[i])) {
            // numsSet이 가지고있는 요소는 제거
            numsSet.delete(nums[i]);
        // 요소를 가지고있지 않다면 이미 제거된 요소이므로 중복 판정
        } else return true
    }
    return false;
};