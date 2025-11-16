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
 * @return {number}
 */
var maxDepth = function(root) {
    return getMaxDepth(root)
};

function getMaxDepth(node){
    if (node === null) return 0;
    
    const leftDepth = node.left ? getMaxDepth(node.left) : 0;
    const rightDepth = node.right ? getMaxDepth(node.right) : 0;

    return Math.max(leftDepth, rightDepth) + 1
}