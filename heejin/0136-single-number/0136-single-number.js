/**
 * @param {number[]} nums
 * @return {number}
 */

 // 현재 요소와 동일한 요소 찾고 두 요소 제거
const singleNumber = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const firstIndex = i;
        const secondIndex = nums.indexOf(nums[i], i + 1);

        if (secondIndex !== -1) {
            nums.splice(secondIndex, 1);
            nums.splice(firstIndex, 1);
            i--; 
        }
    }
    return nums[0];
};