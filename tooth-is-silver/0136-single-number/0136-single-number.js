/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // nums에서 반복되지 않는 것이 딱 하나 있다
    // findIndex를 사용하면 index가 여러개인지 확인할수 있지않나?
    const setNums = Array.from(new Set(nums));
    for (let i = 0; i < setNums.length; i++) {
        if (nums.filter(num => num === setNums[i]).length === 1)
        return setNums[i]
    }
};