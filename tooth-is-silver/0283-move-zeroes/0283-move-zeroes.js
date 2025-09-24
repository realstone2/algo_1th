/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 투포인터로 탐색하면서 유효한 숫자의 위치 이외에는 0으로 채움
    let location = 0; // 유효한 숫자 갯수
    let search = 0; // 전체 탐색

    while (search < nums.length) {
        // 현재 탐색하는 값이 0이라면 탐색+
        if (nums[search] !== 0) {
            // 0이 아니라면 탐색+ 위치+
            // 현재 위치에 탐색하는 값 넣기
            nums[location] = nums[search]
            location++
        }
        search++
    }

    console.log(nums)
    // 나머지는 0으로 채워넣기
    for (let i = location; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
};