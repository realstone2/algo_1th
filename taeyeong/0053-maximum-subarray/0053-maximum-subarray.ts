function maxSubArray(nums: number[]): number {
  // 배열이 비어 있으면 0 반환
  if (nums.length === 0) return 0;

  // 첫 번째 원소로 초기화
  let currentSum = nums[0];
  let maxSum = nums[0];

  // 두 번째 원소부터 순회
  for (let i = 1; i < nums.length; i++) {
    // "이전까지의 연속합 + 현재값" vs "현재값 하나만" 중 더 큰 쪽 선택
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // 지금까지의 최대값 갱신
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
