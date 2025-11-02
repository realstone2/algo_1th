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
    function helper(left, right) {
        if (left > right) return null; // 더 이상 노드 없음

        const mid = Math.floor((left + right) / 2); // 중간값
        const node = new TreeNode(nums[mid]);

        node.left = helper(left, mid - 1);   // 왼쪽 부분 재귀
        node.right = helper(mid + 1, right); // 오른쪽 부분 재귀

        return node;
    }

    return helper(0, nums.length - 1);
};