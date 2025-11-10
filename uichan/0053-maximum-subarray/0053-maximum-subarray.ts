function maxSubArray(nums: number[]): number {
    let 현재합 = nums[0];
    let 최대합 = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (현재합 < 0) {
            현재합 = nums[i];
        } else {
            현재합 += nums[i];
        }
        
        최대합 = Math.max(최대합, 현재합);
    }
    
    return 최대합;
};