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
    if (!nums || nums.length === 0) return null;

    const build = (l, r) => {
        if (l > r) return null;
        const mid = (l + r) >> 1;        // 중앙 인덱스
        const root = new TreeNode(nums[mid]);
        root.left = build(l, mid - 1);   // 왼쪽 구간
        root.right = build(mid + 1, r);  // 오른쪽 구간
        return root;
    };

    return build(0, nums.length - 1);
};