function maxSubArray(nums: number[]): number {
    let max = - Infinity
    let sum = 0

    for(const num of nums) {
        sum = Math.max(num, num+sum)
        max = Math.max(sum, max)
    }

    return max
};