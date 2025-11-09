/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    if(!root) return true
    
    return go(root.left, root.right)
};

function go (left, right) {
    if(!left && !right) return true
    if(!left || !right) return false

    const isSync = left.val === right.val
    return isSync && go(left.left, right.right) && go(left.right, right.left)
}