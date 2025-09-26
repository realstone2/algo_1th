/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    const newArr = nums.filter(item => {
        if (item !== 0) {
            return true;
        } else {
            count++;
            return false;
        }
    });

    // 원본 배열을 비우고 newArr 넣기
    nums.splice(0, nums.length, ...newArr)

    // 0들을 한 번에 추가
    nums.push(...Array(count).fill(0));
};