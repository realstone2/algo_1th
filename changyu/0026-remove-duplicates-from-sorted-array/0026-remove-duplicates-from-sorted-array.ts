function removeDuplicates(nums: number[]): number {
	let answer = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;
		nums[answer] = nums[i];
		answer += 1;
	}

	return answer;
}