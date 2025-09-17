function containsDuplicate(nums: number[]): boolean {
    const set = new Set(nums)
    
    // 중복이 있으면 true 리턴?
    return set.size !== nums.length
};