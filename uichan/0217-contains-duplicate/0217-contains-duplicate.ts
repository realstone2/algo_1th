function containsDuplicate(nums: number[]): boolean {
    const set = new Set(nums)
    if (nums.length === set.size) return false
    
    return true
};