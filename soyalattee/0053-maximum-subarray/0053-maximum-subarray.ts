function maxSubArray(nums: number[]): number {
    // 연속 부분 배열의 최대 합

    let curSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curSum = Math.max(nums[i], curSum + nums[i]); //기존꺼 합친게 더 클지, 싹 지워버릴지
        maxSum = Math.max(maxSum, curSum);
    }

  return maxSum;
};