function containsDuplicate(nums: number[]): boolean {
    const setNums = new Set(nums);
	return setNums.size !== nums.length;
}