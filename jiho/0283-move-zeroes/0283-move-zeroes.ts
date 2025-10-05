/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const TARGET = 0
    let i = 0

    for(const num of nums) {
        if(num !== TARGET) {
            nums[i] = num
            i ++
        }
    }

    for(let j = i; j < nums.length; j++) nums[j] = 0

};