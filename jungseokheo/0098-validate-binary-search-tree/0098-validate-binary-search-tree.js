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
const isValidBST = function(root) {
    function validateNode (node, min, max) {
        if (node === null) return true;

        if (node.val <= min || node.val >= max) return false;

        return validateNode(node.left, min, node.val)
            && validateNode(node.right, node.val, max)
    }

    return validateNode(root, -Infinity, Infinity);
};