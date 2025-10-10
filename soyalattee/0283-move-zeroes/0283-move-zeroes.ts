/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let pivot = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[pivot]; 
            nums[pivot] = nums[i];
            nums[i] = temp;

            pivot++;
        }
  }
};