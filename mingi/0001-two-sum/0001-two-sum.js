/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function findSumRecursive(nums, target, index, map) {
  if (index >= nums.length) {
    return null;
  }

  const currentNum = nums[index];
  const complement = target - currentNum;

  if (map.has(complement)) {
    return [map.get(complement), index];
  }

  map.set(currentNum, index);

  return findSumRecursive(nums, target, index + 1, map);
}

var twoSum = function (nums, target) {
  let index = 0;
  let map = new Map();
  return findSumRecursive(nums, target, index, map);
};
