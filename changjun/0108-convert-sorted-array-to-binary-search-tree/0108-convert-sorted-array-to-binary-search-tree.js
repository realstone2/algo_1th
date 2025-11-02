/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;

  function helper(left, right) {
    if (left > right) return null; // 구간이 비면 null 반환

    const mid = Math.floor((left + right) / 2); // 중간 인덱스 선택
    const node = new TreeNode(nums[mid]);

    node.left = helper(left, mid - 1);  // 왼쪽 부분 배열 -> 왼쪽 서브트리
    node.right = helper(mid + 1, right); // 오른쪽 부분 배열 -> 오른쪽 서브트리

    return node;
  }

  return helper(0, nums.length - 1);
};