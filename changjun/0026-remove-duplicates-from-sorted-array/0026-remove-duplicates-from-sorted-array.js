/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // 고유 원소 개수를 세는 포인터 (첫 번째 원소는 항상 고유함)
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // 고유한 값이면 앞으로 덮어씀
            k++;
        }
    }

    return k;
};
