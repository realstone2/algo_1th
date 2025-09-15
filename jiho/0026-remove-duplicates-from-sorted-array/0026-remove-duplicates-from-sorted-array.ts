function removeDuplicates(nums: number[]): number {
    const len = nums.length
    if(len === 0) return 0;
    
    let n = 0
    
    for(let i = 0; i < len; i ++) {
        if(nums[i] !== nums[n]) {
            n +=1
            nums[n] = nums[i]
        }
    }
    
    return n + 1
};