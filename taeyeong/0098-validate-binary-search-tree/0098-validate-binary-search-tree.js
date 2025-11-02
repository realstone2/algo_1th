/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function helper(node, min, max) {
        if (node === null) return true; // 기저 조건

        // 현재 노드가 범위(min < val < max) 안에 없으면 false
        if (node.val <= min || node.val >= max) return false;

        // 왼쪽은 (min, node.val), 오른쪽은 (node.val, max)
        return (
            helper(node.left, min, node.val) &&
            helper(node.right, node.val, max)
        );
    }

    return helper(root, -Infinity, Infinity);
};