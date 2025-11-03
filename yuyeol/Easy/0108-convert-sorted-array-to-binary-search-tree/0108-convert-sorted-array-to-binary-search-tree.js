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

const recursive = (nums, left, right) => {
    if (left > right) return null;
    const mid = left + Math.floor((right - left) / 2);
    const node = new TreeNode(nums[mid]);

    node.left  = recursive(nums, left, mid - 1);
    node.right = recursive(nums, mid + 1, right);

    return node;
}

var sortedArrayToBST = function(nums) {
    return recursive(nums, 0, nums.length - 1);
};