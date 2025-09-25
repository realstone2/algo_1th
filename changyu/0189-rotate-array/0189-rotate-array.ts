/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
	const n = nums.length;
	k = k % n;

	function reverse(start: number, end: number): void {
		while (start < end) {
			[nums[start], nums[end]] = [nums[end], nums[start]];
			start++;
			end--;
		}
	}

	// 1. 전체 배열 뒤집기
	reverse(0, n - 1);
	// 2. 앞쪽 k개 뒤집기
	reverse(0, k - 1);
	// 3. 나머지 뒤집기
	reverse(k, n - 1);
}