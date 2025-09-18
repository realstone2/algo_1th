/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 값이 중복으로 들어왔는지 아닌지 체크
    // nums를 반복문으로 돌려서 배열안에 값이 없으면 넣고, 다음으로
    // 배열안에 값이 있으면 바로 true 반환
    // 첫번째 시도 includes로 확인했으나 time limit exceeded 로 set으로 수정 
    const checkedSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (checkedSet.has(nums[i])) {
            return true
        } else {
            checkedSet.add(nums[i])
        }
    }
    return false
};