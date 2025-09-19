/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let moveCnt = nums.length - (k % nums.length);
    const prefix = nums.slice(moveCnt)
    nums.splice(moveCnt,k)
    nums.splice(0,0,...prefix);
};