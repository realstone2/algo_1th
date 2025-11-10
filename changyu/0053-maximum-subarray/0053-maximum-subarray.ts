function maxSubArray(nums) {
  function helper(left, right) {
    if (left === right) return nums[left];

    const mid = Math.floor((left + right) / 2);
    const leftSum = helper(left, mid);
    const rightSum = helper(mid + 1, right);
    const crossSum = maxCrossSum(nums, left, mid, right);

    return Math.max(leftSum, rightSum, crossSum);
  }

  function maxCrossSum(nums, left, mid, right) {
    let leftMax = -Infinity, rightMax = -Infinity;
    let sum = 0;

    for (let i = mid; i >= left; i--) {
      sum += nums[i];
      leftMax = Math.max(leftMax, sum);
    }

    sum = 0;
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i];
      rightMax = Math.max(rightMax, sum);
    }

    return leftMax + rightMax;
  }

  return helper(0, nums.length - 1);
}