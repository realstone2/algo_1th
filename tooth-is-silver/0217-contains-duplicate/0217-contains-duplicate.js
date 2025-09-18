/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 값이 중복으로 들어왔는지 아닌지 체크
    // nums를 반복문으로 돌려서 배열안에 값이 없으면 넣고, 다음으로
    // 배열안에 값이 있으면 바로 true 반환
    const checked = []
    for (let i = 0; i < nums.length; i++) {
        if (checked.includes(nums[i])) {
            console.log(nums[i], '가 잇음', checked)
            return true
        } else {
            checked.push(nums[i])
        }
    }
    return false
};